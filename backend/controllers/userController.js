import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'
import validator from 'validator'
import jwt from 'jsonwebtoken'
import Stripe from 'stripe'
import transactionModel from '../models/transactionModel.js'


const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body
        if(!name || !email || !password) {
            return res.json({success: false, message: "All field are required"})
        }
        const exist = await userModel.findOne({email})
        if(exist){
            return res.json({success: false, message: "user already exist"})
        }

        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Please enter a valid email"})
        }

        if(password.length < 8) {
            return res.json({success:false, message:"enter a strong password"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
        const userData = {
            name,
            email,
            password:hashedPassword
        }
        const newUser = new userModel(userData)
        const user = await newUser.save()
        const token = jwt.sign({id:user._id},process.env.JWT_SECRECT)
        res.json({success:true, token, user: {name: user.name}})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await userModel.findOne({email})
        if(!user) {
            return res.json({success: false, message: "User does not exsit"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(isMatch){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRECT)
            res.json({success: true, token, user: {name: user.name}})
        }
        else{
            return res.json({success: false, message: "Invalid credintials"})
        }

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
} 

const userCredits = async (req, res) => {
    try {
        const userId = req.userId  // matches what auth middleware sets

        if (!userId) {
            return res.json({ success: false, message: "User ID missing" })
        }

        const user = await userModel.findById(userId)

        if (!user) {
            return res.json({ success: false, message: "User not found" })
        }

        res.json({ success: true, credits: user.creditBalance, user: { name: user.name } })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}


const stripe = new Stripe(process.env.STRIPE_SECRECT_KEY)

const paymentStripe = async (req, res) => {
  try {
    const  planId = req.body.planId
    const userId = req.userId

    if ( !planId) {
      return res.json({ success: false, message: "Missing Plan Details" });
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    let credits, plan, amount;
 switch (planId) {
      case 'basic':
        plan = 'basic'
        credits = 50
        amount = 99        // ✅ was 10 (below Stripe ₹50 minimum)
        break;

      case 'advanced':
        plan = 'advanced'
        credits = 500
        amount = 499       // ✅ was 100
        break;

      case 'business':     // ✅ was 'bussiness' (typo)
        plan = 'business'
        credits = 5000
        amount = 1999      // was 500
        break;

      default:
        return res.json({ success: false, message: "Plan not found" });
    }

    // Save transaction
    const transaction = await transactionModel.create({
        userId,
        plan,
        amount,
        credits,
        date: Date.now(),
        status: "pending",
    });

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                currency: (process.env.CURRENCY || "inr").toLowerCase(), // ✅ fix uppercase INR → inr
                product_data: { name: `${plan} Plan` },
                unit_amount: amount * 100, // ✅ correct: ₹99 → 9900 paise
            },
                quantity: 1,
        },
    ],
        mode: "payment",
        success_url: `${process.env.FRONTEND_URL}/payment-success?transactionId=${transaction._id}`,
        cancel_url: `${process.env.FRONTEND_URL}/payment-cancel`,
        metadata: {
        transactionId: transaction._id.toString(),
        userId: userId.toString(),
            plan,
        },
    });

 // Save Stripe session ID
    transaction.stripeSessionId = session.id;
    await transaction.save();

    res.json({ success: true, url: session.url });

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
}

const verifyStripe = async (req, res) => {
    try {
        const { transactionId } = req.body;
        const userId = req.userId;

        if (!transactionId || !userId) {
            return res.json({ success: false, message: "Missing required details" });
        }

        const transaction = await transactionModel.findOne({
            _id: transactionId,
            userId,
        });

        if (!transaction) {
            return res.json({ success: false, message: "Transaction not found" });
        }

        // Prevent double crediting
        if (transaction.status === "success") {
            return res.json({ success: true, credits: transaction.credits });
        }

        const session = await stripe.checkout.sessions.retrieve(
            transaction.stripeSessionId
        );

        if (session.payment_status === "paid") {
            transaction.status = "success";
            transaction.paymentIntent = session.payment_intent;
            await transaction.save();

            // ✅ Bug 1 fixed - creditBalance instead of credits
            await userModel.findByIdAndUpdate(userId, {
                $inc: { creditBalance: transaction.credits },
            });
            return res.json({ success: true, credits: transaction.credits });
        }
        return res.json({ success: false, message: "Payment not completed" });
    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: error.message });
    }
};


export {registerUser, loginUser, userCredits, paymentStripe,verifyStripe}