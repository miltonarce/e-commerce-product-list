module.exports = {
  body: { $ref: "product" },
  params: {
    id: { type: "number" },
  },
  response: {
    200: {
      type: "array",
      items: { $ref: "product" },
    },
    201: { $ref: "product" },
    400: {
      type: "object",
      properties: {
        message: { type: "string" },
      },

    },
    404: {
      type: "object",
      properties: {
        message: { type: "string" },
      },
    },
    500: {
      type: "object",
      properties: {
        message: { type: "string" },
      },
    },
  },
};
