import { useContext } from "react";
import { ProductContext } from "@/providers/Product/ProductProvider";

function useProductFinder() {
  const { products, isLoading, error } = useContext(ProductContext);

  return {
    products,
    isLoading,
    error,
  };
}

export default useProductFinder;
