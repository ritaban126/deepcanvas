# 🎨 DeepCanvas — AI Text to Image Generator

A full-stack MERN application that transforms text prompts into stunning AI-generated images using the Clipdrop API. Built with React, Node.js, Express, MongoDB, and secured with JWT authentication.

---

## 🚀 Live Demo

🔗 [https://deepcanvas-2.onrender.com](https://deepcanvas-2.onrender.com)

---

## ✨ Features

- 🖼️ Generate high-quality images from text prompts using AI
- 🔐 User authentication with JWT (Register / Login)
- 💳 Credit-based system — each image generation costs credits
- 💰 Stripe payment integration for purchasing credits
- 📱 Fully responsive UI built with React + Tailwind CSS
- ☁️ Deployed on Render (monorepo — frontend + backend together)

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Axios
- React Router DOM
- React Toastify
- Context API

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Tokens)
- Bcrypt
- Stript Payment
- Clipdrop API (AI image generation)

---

## 📁 Project Structure

```
root/
├── frontend/               # React Vite app
│   ├── src/
│   │   ├── components/     # Navbar, Footer, GenerateBtn, etc.
│   │   ├── pages/          # Home, Result, BuyCredits
│   │   ├── context/        # App context (auth, credits)
│   │   └── assets/
│   └── .env
│
├── backend/                # Express API
│   ├── config/             # MongoDB connection
│   ├── controllers/        # userController, imageController
│   ├── middlewares/         # auth middleware
│   ├── models/             # User model
│   ├── routes/             # userRoutes, imageRoutes
│   └── server.js
│
└── package.json            # Root package.json (monorepo)
```

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIPDROP_API=your_clipdrop_api_key
STRIPE_KEY_ID=your_stripe_key_id
STRIPE_KEY_SECRET=your_stripe_key_secret
FRONTEND_URL=https://your-frontend-url.onrender.com
PORT=3000
```

### Frontend (`frontend/.env`)
```env
VITE_BACKEND_URL=https://your-backend-url.onrender.com
```

> ⚠️ Never commit `.env` files to Git. Add them directly in your hosting platform's environment settings.

---

## 🧑‍💻 Getting Started Locally

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Clipdrop API key
- Stripe account (for payments)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/deepcanvas.git
cd deepcanvas
```

### 2. Install dependencies
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install
```

### 3. Set up environment variables
Create `.env` files in both `backend/` and `frontend/` as shown above.

### 4. Run the development servers

```bash
# Run backend
cd backend
npm run dev

# Run frontend (in a new terminal)
cd frontend
npm run dev
```

Frontend runs at `http://localhost:5173`  
Backend runs at `http://localhost:3000`

---

## 🌐 Deployment (Render)

This project is deployed as a **single service monorepo** on Render.

### Build Command
```bash
npm run build
```

### Start Command
```bash
npm start
```

### Environment Variables on Render
Add all backend and frontend env variables in the Render dashboard under **Environment** tab:

```
MONGODB_URI=...
JWT_SECRET=...
CLIPDROP_API=...
RAZORPAY_KEY_ID=...
RAZORPAY_KEY_SECRET=...
FRONTEND_URL=https://deepcanvas-2.onrender.com
VITE_BACKEND_URL=https://deepcanvas-2.onrender.com
```

---

## 🔌 API Endpoints

### User Routes `/api/user`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Login and receive JWT |
| GET | `/credits` | Get user credit balance |
| POST | `/pay-stripe` | Create Stripe payment method |
| POST | `/verify-stripe` | Verify stripe payment and add credits |

### Image Routes `/api/image`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/generate-image` | Generate image from text prompt |

---

## 💳 Credit System

| Plan | Credits | Price |
|------|---------|-------|
| Basic | 50 | $99 |
| Advanced | 500 | $499 |
| Business | 5000 | $1999 |



---



## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).



