const fp = require("fastify-plugin");

async function schemas(fastify, options) {
  fastify.addSchema({
    $id: "product",
    type: "object",
    properties: {
      id: { type: "number" },
      name: { type: "string" },
      description: { type: "string" },
      price: { type: "number" },
    },
  });
}

module.exports = fp(schemas);
