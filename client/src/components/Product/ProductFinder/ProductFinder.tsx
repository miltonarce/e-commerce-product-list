import SearchInput from "@/components/SearchInput";
import ProductList from "@/components/Product/ProductList";
import useProductFinder from "@/hooks/useProductFinder";
import useSearch from "@/hooks/useSearch";

function ProductFinder() {
  const { products, isLoading, error } = useProductFinder();
  const { value, handleSearch } = useSearch();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }
  return (
    <section>
      <section><SearchInput value={value} onSearch={handleSearch} /></section>
      <section><ProductList products={products} searchTerm={value} /></section>
    </section>
  );
}

export default ProductFinder;
