import type {
  IProduct,
} from "@/types/product";
import ProductItem from "@/components/Product/ProductItem";

interface IProductList {
  products: IProduct[] | null;
  searchTerm: string;
};
function ProductList({ products, searchTerm }: IProductList) {
  if (!products) {
    return null;
  };

  const filteredProducts = products.filter((product) => {
    const searchTermLower = searchTerm.toLowerCase();
    return product.name.toLowerCase().includes(searchTermLower)
      || product.description?.toLowerCase().includes(searchTermLower);
  });

  return (
    <ul className="my-6">
      {filteredProducts.map((p: IProduct) => (
        <li key={p.id}>
          <ProductItem product={p} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
