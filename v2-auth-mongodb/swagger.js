const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: { title: "Task Manager API", version: "1.0.0", description: "Task Manager API with JWT" },
  servers: [
    { url: "https://devsquad26-15g2.vercel.app/api", description: "Vercel server" }
  ],
  components: { securitySchemes: { bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" } } },
};

const path = require("path");
const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, "routes", "*.js")]
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;