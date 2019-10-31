
export const SWAGGER_CONFIG = {
  apis: ["**/*.ts"],
  swaggerDefinition: {
    basePath: "/api",
    components: {
      schemas: {
        Item: {
          properties: {
            LifetimeSales: {
                type: "integer"
            },
              Name: {
                  type: "string"
              }
          }
        },
        existingList: {
          properties: {
              had: {
                  type: "object",
              },
            has: {
                type: "object",
            },
              title: "string",
            wants: {
                type: "object",
            }
          }
        },
          newList: {
              properties: {
          }
        }
      }
    },
      info: {
          description: "API Documentation for CISC 474 project 2",
          title: "Pantry API",
          version: "1.0.0",
      }
  },
};
