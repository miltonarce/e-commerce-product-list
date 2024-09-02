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
      const allProducts = await new Promise(resolve => setTimeout(() => resolve(products), 3000)); // Simulate a slow response getting all products
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

      const product = await new Promise(resolve => setTimeout(() => resolve(products.find(p => p.id === id)), 3000));

      if (!product) {
        throw new Error(`Product with ID [${id}] not found`);
      }

      reply.send(product);
    } catch (error) {
      if (error.message.startsWith("Product with ID")) {
        reply.code(404).send({ message: error.message });
      } else {
        reply.code(400).send({ message: "Bad Request" });
      }
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
      const newProduct = { id: products.length + 1, ...body };

      await new Promise(resolve => setTimeout(() => {
        products.push(newProduct);
        resolve();
      }, 3000));

      reply.code(201).send(newProduct);
    } catch (error) {
      reply.code(500).send({ message: "Internal Server Error" });
    }
  });
};
