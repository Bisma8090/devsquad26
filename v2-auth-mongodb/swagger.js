const swaggerJSDoc = require("swagger-jsdoc")

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Task Manager API",
    version: "1.0.0",
    description: "Task Manager API with JWT Authentication"
  },
  servers: [
    {
      url: "http://localhost:5000/api",
      description: "Local server"
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  }
}

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"]
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec