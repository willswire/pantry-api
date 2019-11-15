
export const SWAGGER_CONFIG = {
  apis: ["**/*.ts"],
  swaggerDefinition: {
    basePath: "/api",
    info: {
      description: "API Documentation for CISC 474 project 2",
      title: "Pantry API",
      version: "1.0.0",
    },
    components: {
      schemas: {
        Item: {
          properties: {
            Name: {
              type: "string"
            },
            LifetimeSales: {
              type: "integer"
            }
          }
        },
        newList: {
          properties: {

          }
        },
        existingList: {
          properties: {
            has: {
              type: "object",
            },
            wants: {
              type: "object",
            },
            had: {
              type: "object",
            }
          }
        }
      }
    }
  },
};
