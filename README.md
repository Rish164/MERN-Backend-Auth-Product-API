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

## 📜 License

This project is for educational purposes.
