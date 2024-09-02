import { useLocation } from "wouter";
import type { IProduct } from "@/types/product";
import { ERoutes } from "@/routes/definitions";

interface IProductItem {
  product: IProduct;
}

function ProductItem({ product }: IProductItem) {
  const [_, navigate] = useLocation();

  return (<div onClick={() => navigate(`${ERoutes.PRODUCT}/${product.id}`, { replace: true })}>{product.name}</div>);
}

export default ProductItem;
