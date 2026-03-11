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

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// 🔹 Enable CORS
// For dev: allow React frontend localhost
app.use(
  cors({
    origin: "http://localhost:5173", // Change this to frontend URL if deployed
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Routes
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

// Swagger docs
app.use(
  "/api-docs",
  express.static(require("swagger-ui-dist").getAbsoluteFSPath())
);
app.get("/api-docs", (req, res) => {
  res.send(swaggerUI.generateHTML(swaggerSpec, { explorer: true }));
});

// Root endpoint
app.get("/", (req, res) => {
  res.send(
    "The API is running successfully. Explore APIs at /api and Swagger documentation at /api-docs."
  );
});

// Error handler
app.use(errorHandler);

module.exports = app;