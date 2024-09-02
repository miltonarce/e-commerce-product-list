import { useLocation } from "wouter";
import type { IProduct } from "@/types/product";
import { ERoutes } from "@/routes/definitions";

interface IProductItem {
  product: IProduct;
}

function ProductItem({ product }: IProductItem) {
  const [_, setLocation] = useLocation();

  return (<div onClick={() => setLocation(`${ERoutes.PRODUCT}/${product.id}`)}>{product.name}</div>);
}

export default ProductItem;
