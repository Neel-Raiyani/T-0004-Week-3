import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API Documentation",
      version: "1.0.0",
      description: "Complete API docs for all routes",
    },
    servers: [
      {
        url: "http://localhost:3018",
      },
    ],
  },

  apis: ["./src/Routes/*.ts"],
};

const swaggerSpec = swaggerJsDoc(options);

export { swaggerUi, swaggerSpec };
