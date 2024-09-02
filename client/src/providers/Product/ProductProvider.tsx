import React, { createContext, useEffect, useState } from "react";
import PRODUCT_SERVICE from "@/services/products";
import type { IProduct } from "@/types/product";

interface IProductProvider {
  children: React.ReactElement;
}

interface TProductContext {
  products: IProduct[] | null;
  isLoading: boolean;
  error: any;
}

export const ProductContext = createContext<TProductContext>({ products: null, isLoading: false, error: null });

export default function ProductProvider({
  children,
}: IProductProvider) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const data = React.useMemo(() => ({ products, isLoading, error }), [products, isLoading, error]);

  useEffect(() => {
    const fetchProducts
 = async () => {
   setIsLoading(true);
   try {
     const { status, data } = await PRODUCT_SERVICE.getProducts();
     if (status === 200) {
       setProducts(data);
     }
   }
   catch (error: any) {
     setError(error);
   }
   finally {
     setIsLoading(false);
   }
 };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={data}>
      {children}
    </ProductContext.Provider>
  );
}
