const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
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

// Swagger docs
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec, { explorer: true }));

// Error handling
app.use(errorHandler);

module.exports = app;