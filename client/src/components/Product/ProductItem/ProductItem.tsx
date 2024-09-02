import type { IProduct } from "@/types/product";

interface IProductItem {
  product: IProduct;
}

function ProductItem({ product }: IProductItem) {
  return (<div>{product.name}</div>);
}

export default ProductItem;
