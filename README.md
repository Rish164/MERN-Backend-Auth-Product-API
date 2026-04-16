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
│── models/
│── routes/
│── middleware/
│── uploads/
│── server.js
│── .env
```

---

## ⚙️ Setup Instructions

### Install dependencies

```
npm install
```

### Setup environment variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mern_practical
JWT_SECRET=mysecretkey
```

### Run the server

```
node server.js
```

Open:

```
http://localhost:5000
```

---

## 🔌 API Endpoints

### 🔐 Auth Routes

**Register**

```
POST /api/auth/register
```

**Login**

```
POST /api/auth/login
```

---

### 🛍 Product Routes

**Add Product (Protected)**

```
POST /api/products
```

**Get Products**

```
GET /api/products
```

---

### 💳 Payment API

```
POST /api/payment
```

---

## 🧪 Testing Flow

1. Register
2. Login → copy token
3. Add product (with token)
4. Get products
5. Test payment

---

## 🧠 Key Concepts

* REST API Design
* Authentication & Authorization
* Middleware
* File Upload Handling
* Database Integration

---

# 📘 Development Progress (Learning Log)

---

## 📦 Phase 1: Project Setup

### Completed:

* Initialized Node.js project
* Installed dependencies
* Configured `.gitignore`

### Learned:

* Role of `package.json`
* Dependency management
* Importance of ignoring sensitive/large files

---

## 🚀 Phase 2.1: Basic Server

### Completed:

* Created Express server
* Added middleware
* Implemented root route

### Learned:

* Server lifecycle
* Routing basics
* Middleware concept

---

## 🗄 Phase 2.2: Database Connection

### Completed:

* Installed MongoDB
* Configured service
* Connected using Mongoose

### Learned:

* Client–database connection flow
* Connection string structure
* Async operations in backend

---

## 👤 Phase 2.3: User Model

### Completed:
- Created User schema
- Defined email and password fields

### Learned:
- Schema defines structure of data
- Model is used to interact with database
- MongoDB stores data as documents

---

## 🔐 Phase 2.4: Register API

### Completed:
- Implemented user registration route
- Added password hashing using bcrypt
- Stored user data in MongoDB

### Learned:
- How POST requests send data to server
- Passwords must be hashed before storing
- Data flows from client → server → database

---

## 🔑 Phase 2.5: Login API (JWT)

### Completed:
- Implemented login route
- Verified user credentials
- Generated JWT token

### Learned:
- Authentication verifies user identity
- JWT is used as a secure identity token
- Password comparison uses bcrypt

---

## 📜 License

This project is for educational purposes.
