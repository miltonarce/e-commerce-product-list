import axios from "./config";

export default {
  getProducts: () => axios.get("/products"),
  getProductById: (id: number) => axios.get(`/products/${id}`),
};
