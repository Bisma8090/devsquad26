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

app.use(express.json());

// 🔹 CORS middleware
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

// 🔹 Handle preflight OPTIONS requests
app.options("*", cors({
  origin: [
    "http://localhost:5173",
    "https://taskmnager-frontend.netlify.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

// Routes
app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
// Root endpoint
app.get("/", (req, res) => {
  res.send(
    "The API is running successfully. Explore APIs at /api and Swagger documentation at /api-docs."
  );
});

// Error handler
app.use(errorHandler);

module.exports = app;