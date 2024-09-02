import { useRoute } from "wouter";
import { useEffect, useState } from "react";
import { ERoutes } from "@/routes/definitions";
import useProductFinder from "@/hooks/useProductFinder";
import type { IProduct } from "@/types/product";

function ProductDetail() {
  const [match, params] = useRoute(ERoutes.PRODUCT_DETAIL);
  const { isLoading, error, searchById } = useProductFinder();
  const [product, setProduct] = useState<IProduct | null>(null);

  const handleFetchProduct = async () => {
    setProduct(await searchById(Number(params?.id)) || null);
  };

  useEffect(() => {
    if (match) {
      handleFetchProduct();
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !product) {
    return <div>{error}</div>;
  }

  return (
    <div>{product.name}</div>
  );
}

export default ProductDetail;
