# Task Manager API

A simple RESTful API built with **Node.js** and **Express.js** that allows users to manage tasks.  
This project demonstrates backend fundamentals such as CRUD operations, API routing, request validation, error handling, and API documentation using Swagger.

---

## Features

- Create a new task
- Get all tasks
- Get a task by ID
- Update a task
- Delete a task
- Search tasks by title
- Task statistics endpoint
- Swagger API documentation
- Global error handling middleware
- In-memory data storage (no database)

---

## Technologies Used

- Node.js
- Express.js
- UUID
- Swagger UI
- Swagger JSDoc
- Nodemon
- Postman

---

## Project Structure

task-manager-api
│
├── controllers
│ └── taskController.js
│
├── data
│ └── TasksData.js
│
├── middlewares
│ └── middleware.js
│
├── routes
│ └── taskRoutes.js
│
├── swagger.js
├── server.js
└── README.md


---

## Installation & Setup

### 1️⃣ Clone the repository
git clone https://github.com/yourusername/task-manager-api.git

### 2️⃣ Navigate to the project folder
cd task-manager-api

### 3️⃣ Install dependencies
npm install

### 4️⃣ Run the server
npm start


or with nodemon:
npm run dev

Server will start at:
http://localhost:5000/api


---

## API Endpoints

### Get All Tasks
GET /api/tasks


### Get Task by ID


GET /api/tasks/:id


### Create Task


POST /api/tasks


Example Request Body:


{
"title": "Learn Express",
"completed": false,
"description": "Build a simple Express project"
}


---

### Update Task


PUT /api/tasks/:id


---

### Delete Task


DELETE /api/tasks/:id


---

### Search Tasks


GET /api/tasks?title=learn


---

### Task Statistics


GET /api/tasks/stats


Response Example:


{
"success": true,
"data": {
"totalTasks": 10,
"completedTasks": 4,
"pendingTasks": 6
},
"message": "Tasks statistics"
}


---

## Response Format

All API responses follow this structure:


{
"success": true,
"data": {},
"message": "Operation successful"
}
## Testing with Postman

All endpoints were tested using **Postman**.  
A Postman collection can be exported and shared for easier API testing.

