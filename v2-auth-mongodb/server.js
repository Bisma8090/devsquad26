const auth = require("./Middlewares/auth");
const errorHandler = require("./Middlewares/errorHandler");
require("dotenv").config()

const express = require("express")
const swaggerUI = require("swagger-ui-express")
const swaggerSpec = require("./swagger")
const taskRoutes = require("./routes/taskRoutes")
const authRoutes = require("./routes/authRoutes")
const connectDB = require("./config/db")

const app = express()

connectDB()

app.use(express.json())

// Auth routes
app.use("/api", authRoutes)

// Task routes
app.use("/api", taskRoutes)

// Swagger docs
app.use("/api-docs", swaggerUI.serve);

app.get(
  "/api-docs",
  swaggerUI.setup(swaggerSpec, {
    explorer: true
  })
);
// Error handling
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`)
})