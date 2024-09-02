import axios from "./config";
import type { IAddNewProduct } from "@/types/product";

export default {
  getProducts: () => axios.get("/products"),
  getProductById: (id: number) => axios.get(`/products/${id}`),
  addProduct: (product: IAddNewProduct) => axios.post("/products", product),
};
