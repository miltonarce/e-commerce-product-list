import axios from "./config";

export default {
  getProducts: () => axios.get("/products"),
};
