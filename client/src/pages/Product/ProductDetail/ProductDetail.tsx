import { useRoute } from "wouter";
import { useEffect, useState } from "react";
import { ERoutes } from "@/routes/definitions";
import useProductFinder from "@/hooks/useProductFinder";
import type { IProduct } from "@/types/product";
import Spinner from "@/components/Spinner";
import ProductItem from "@/components/Product/ProductItem";

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
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-80">
        <div className="flex items-center justify-center pt-48">
          <Spinner />
        </div>
      </section>
    );
  };

  if (error || !product) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-80">
        Error:
        {" "}
        {error}
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-80">
      <ProductItem product={product} overSize />
    </section>
  );
}

export default ProductDetail;
