# Task Manager API
Task Manager API (v2) is a robust RESTful API built using Node.js and Express.js, with **MongoDB** for persistent storage, **JWT-based authentication**, and **request validation**.  

It allows users to securely perform CRUD operations on their tasks and includes **Swagger documentation** for all endpoints.
---

## Features

- User Registration and Login with JWT authentication
- Secure routes (users can only access their own tasks)
- Create, Read, Update, Delete tasks
- Input validation using `express-validator`
- Search tasks by title
- Task statistics endpoint
- Swagger API documentation
- Persistent storage using MongoDB

---

## Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- express-validator
- Swagger UI & swagger-jsdoc
- dotenv
- Postman

---

## Project Structure

task-manager-api
│
├── controllers
│ ├── authController.js
│ └── taskController.js
│
├── models
│ ├── User.js
│ └── Task.js
│
├── routes
│ ├── authRoutes.js
│ └── taskRoutes.js
│
├── middleware
│ ├── auth.js
│ └── validateRequest.js
│
├── config
│ └── db.js
│
├── docs
│ └── swagger.js
│
├── server.js
└── README.md

---
## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Bisma8090/devsquad26/tree/main/v2-auth-mongodb.git
   ```

2. Navigate to the project directory:

   ```bash
   cd v2-auth-mongodb
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Create a .env file in the root directory and add:

   ```bash
PORT=5000
MONGO_URI=mongodb+srv://bisma:B8jp4Ey44g9xJm2Z@cluster0.rmftyvb.mongodb.net/?appName=Cluster0
JWT_SECRET=mysecretkey
```
5. Start the application:

   ```bash
   npm start 
   ```
   or
    ```bash
   npm run dev 
   ```

4. Server will start at:

    ```bash
   http://localhost:5000
   ```
4. Swagger Documentation:

    ```bash
   http://localhost:5000/api-docs
   ```
## Sample Request

POST /api/tasks

### Request Body

```json
{
  "title": "Learn Express",
  "completed": false,
  "description": "Build a small Express project"
}
```

## Sample Response

```json
{
  "success": true,
  "data": {
    "id": "uuid-example",
    "title": "Learn Express",
    "description": "Build a small Express project",
    "completed": false,
    "user": "user_id_here"
  },
  "message": "Task created successfully"
}
```
## Testing with Postman

All endpoints were tested using **Postman**.  
A Postman collection can be exported and shared for easier API testing.
[Download Postman Collection](./TaskManagerAPI.postman_collection.json)

## Deployment

1. Live deployment:

   ```bash
   https://devsquad26-15g2.vercel.app/t
   ```
