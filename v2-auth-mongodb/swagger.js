const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Task Manager API",
    version: "1.0.0",
    description: "Task Manager API with JWT Authentication"
  },
  servers: [
    {
      url: "https://devsquad26-15g2.vercel.app/api", // Vercel live URL
      description: "Production server"
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" }
    }
  }
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"] // sirf routes folder se pick kar rahe hain
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;