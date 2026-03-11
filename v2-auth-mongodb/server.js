const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const swaggerUiDist = require("swagger-ui-dist").getAbsoluteFSPath(); // <-- add this
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const connectDB = require("./config/db");
const errorHandler = require("./Middlewares/errorHandler");
require("dotenv").config();

const app = express();

connectDB();

app.use(express.json());

// Auth routes
app.use("/api", authRoutes);

// Task routes
app.use("/api", taskRoutes);

// ✅ Swagger docs

// Serve static Swagger assets (JS/CSS)
app.use("/api-docs", express.static(swaggerUiDist));

// Serve Swagger HTML
app.get("/api-docs", (req, res) => {
  res.send(swaggerUI.generateHTML(swaggerSpec));
});

// Error handling
app.use(errorHandler);

module.exports = app;