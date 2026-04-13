# MERN Backend Auth Product API

A secure backend system built using Node.js, Express, and MongoDB that demonstrates authentication, protected routes, file uploads, and API testing.

---

## 🚀 Features

* 🔐 JWT Authentication (Login & Register)
* 🔑 Password Hashing using bcrypt
* 🛡 Protected Routes with Middleware
* 🛍 Product Management API
* 🖼 Image Upload using Multer
* 💳 Mock Payment API
* ✅ API Testing with Postman

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JSON Web Tokens (JWT)
* bcryptjs
* Multer
* Postman

---

## 📁 Project Structure

```
project/
│── models/        # Database schemas
│── routes/        # API routes
│── middleware/    # Authentication middleware
│── uploads/       # Uploaded images
│── server.js      # Entry point
│── .env           # Environment variables
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/mern-backend-auth-product-api.git
cd mern-backend-auth-product-api
```

### 2. Install dependencies

```
npm install
```

### 3. Setup environment variables

Create a `.env` file in root:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mern_practical
JWT_SECRET=mysecretkey
```

### 4. Run the server

```
node server.js
```

Server will start at:

```
http://localhost:5000
```

---

## 🔌 API Endpoints

### 🔐 Auth Routes

#### Register

```
POST /api/auth/register
```

Body:

```
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

---

#### Login

```
POST /api/auth/login
```

Response:

```
{
  "token": "your_jwt_token"
}
```

---

### 🛍 Product Routes

#### Add Product (Protected)

```
POST /api/products
```

Headers:

```
Authorization: your_token
```

Body (form-data):

* name
* price
* image (file)

---

#### Get Products

```
GET /api/products
```

---

### 💳 Payment API

```
POST /api/payment
```

Body:

```
{
  "amount": 500
}
```

---

## 🧪 Testing (Postman Flow)

1. Register a user
2. Login and copy JWT token
3. Add product (use token in header)
4. Fetch products
5. Test payment API

---

## 🧠 Key Concepts Demonstrated

* REST API Design
* Authentication vs Authorization
* Middleware in Express
* File Handling in Node.js
* Database Integration using Mongoose

---

## 📌 Notes

* Ensure MongoDB is running locally before starting the server
* Use Postman for testing APIs
* Uploaded images are stored in the `/uploads` folder

---

## 📜 License

This project is for educational purposes.
