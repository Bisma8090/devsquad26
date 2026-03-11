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

app.use("/api-docs", express.static(require("swagger-ui-dist").getAbsoluteFSPath()));
app.get("/api-docs", (req, res) => {
  res.send(swaggerUI.generateHTML(swaggerSpec, { explorer: true }));
});


app.get("/", (req, res) => {
  res.send("The API is running successfully. Explore APIs at /api and Swagger documentation at /api-docs.");
});

// Error handler
app.use(errorHandler);

module.exports = app;