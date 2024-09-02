import { useContext } from "react";
import { ProductContext } from "@/providers/Product/ProductProvider";

function useProductFinder() {
  const { products, isLoading, error, searchById } = useContext(ProductContext);

  return {
    products,
    isLoading,
    error,
    searchById,
  };
}

export default useProductFinder;
