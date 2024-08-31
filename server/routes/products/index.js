"use strict";

const products = require("../../store/products");

module.exports = async function (fastify, opts) {
  fastify.get("/", {
    schema: {
      response: {
        200: {
          type: "array",
          items: { $ref: "product" },
        },
        500: {
          type: "object",
          properties: {
            message: { type: "string" },
          },
        },
      },
    },
  }, async function (request, reply) {
    try {
      const allProducts = products; //  products.getAll() from a database
      reply.send(allProducts);
    } catch (error) {
      reply.code(500).send({ message: "Internal Server Error" });
    }
  });

  fastify.get("/:id", {
    schema: {
      params: {
        id: { type: "number" },
      },
      response: {
        200: { $ref: "product" },
        404: {
          type: "object",
          properties: {
            message: { type: "string" },
          },
        },
      },
    },
  }, async (request, reply) => {
    try {
      const { id } = request.params;

      const product = products.find(p => p.id === id);

      if (!product) {
        throw new Error("Product not found");
      }

      reply.send(product);
    } catch (error) {
      reply.code(404).send({ message: error.message });
    }
  });

  fastify.post("/", {
    schema: {
      body: { $ref: "product" },
      response: {
        201: { $ref: "product" },
      },
      400: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  }, async (request, reply) => {
    try {
      const { body } = request;

      products.push(body);
      reply.code(201).send(body);
    } catch (error) {
      if (error.isJoi) {
        reply.code(400).send({ message: error.details[0].message });
      } else {
        fastify.log.error(error);
        reply.code(500).send({ message: "Internal Server Error" });
      }
    }
  });
};
