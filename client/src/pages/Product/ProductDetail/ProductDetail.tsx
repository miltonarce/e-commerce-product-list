import { useRoute } from "wouter";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { CpuChipIcon } from "@heroicons/react/24/outline";
import { ERoutes } from "@/routes/definitions";
import useProductFinder from "@/hooks/useProductFinder";
import type { IProduct } from "@/types/product";
import { classNames } from "@/utils/globals";

const reviews = { href: "#", average: 4, totalCount: 117 };

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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-80">
      <div className="flex py-6 cursor-pointer bg-white shadow-md rounded px-4 py-2 mb-4">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <CpuChipIcon aria-hidden="true" className="h-full w-full object-cover object-center text-indigo-500" />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div className="mb-4">
            <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
              <h2 className="">
                {product.name}
              </h2>
              <p className="ml-4">
                $
                {" "}
                {product.price}
              </p>
            </div>
            <p className="text-sm text-gray-400">
              {product.description}
            </p>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map(rating => (
                <StarIcon
                  key={rating}
                  aria-hidden="true"
                  className={classNames(
                    reviews.average > rating ? "text-gray-900" : "text-gray-200",
                    "h-5 w-5 flex-shrink-0",
                  )}
                />
              ))}
              <p className="sr-only">
                {reviews.average}
                {" "}
                out of 5 stars
              </p>
              <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                {reviews.totalCount}
                {" "}
                reviews
              </a>
            </div>
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Available Stock
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
