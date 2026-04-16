// in this file we find the  user id using jwt
import jwt from 'jsonwebtoken'


// this middleware will be executed before the controller function when we will hit the api so for this is use next

const userAuth = async (req, res, next) => {
    // then find the token 
    const {token} = req.headers;

    if(!token) {
        return res.json({success: false, message: "Not Authorized. Login Again"})
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRECT);
        
        if(tokenDecode.id) {
            // req.body.userId = tokenDecode.id;
            req.userId = tokenDecode.id;
        }
        else{
            return res.json({success: false, message: "Not Authorized. Login Again"})
        }
        next();

        //jwt.verify() checks if the token is valid using your secret key.
        // If valid, it decodes the token and returns the payload (usually contains user ID, email, etc.).
        // Example payload: { id: "1234", email: "test@test.com" 
        // if(tokenDecode.id) { req.body.userID = tokenDecode.id; }
        // Checks if the decoded token contains a userID (or id).
        // If yes, it attaches this id to req.body.userID so your controllers can know which user is making the request.
        
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}
export default userAuth



