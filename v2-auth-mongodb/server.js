const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const connectDB = require("./config/db");
const errorHandler = require("./Middlewares/errorHandler");
require("dotenv").config();

const app = express();

// 🔹 Connect to MongoDB
connectDB();

// 🔹 Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://taskmnager-frontend.netlify.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
  })
);

// 🔹 Routes
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

// 🔹 Swagger docs
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// 🔹 Root endpoint
app.get("/", (req, res) => {
  res.send(
    "The API is running successfully. Explore APIs at /api and Swagger documentation at /api-docs."
  );
});

// 🔹 Error handler
app.use(errorHandler);

// 🔹 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;