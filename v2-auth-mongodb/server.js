const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const swaggerUiDist = require("swagger-ui-dist").getAbsoluteFSPath();

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const connectDB = require("./config/db");
const errorHandler = require("./Middlewares/errorHandler");
require("dotenv").config();

const app = express();

connectDB();
app.use(express.json());

// Routes
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

// Swagger docs
app.use("/api-docs", express.static(swaggerUiDist));
app.get("/api-docs", (req, res) => {
  res.send(swaggerUI.generateHTML(swaggerSpec, { explorer: true }));
});

// Error handler
app.use(errorHandler);

module.exports = app;