const express = require("express");
const cors = require("cors"); // ✅ Add CORS
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const swaggerUiDist = require("swagger-ui-dist").getAbsoluteFSPath();

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

// 🔹 Enable CORS for local + deployed frontend
app.use(
  cors({
    origin: [
      "http://localhost:5173",              // local dev
      "https://devsquad26-5va7.vercel.app" // deployed frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
  })
);

// Routes
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

// Swagger docs
app.use("/api-docs", express.static(swaggerUiDist));
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