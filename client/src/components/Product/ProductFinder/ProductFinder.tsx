import SearchInput from "@/components/SearchInput";
import ProductList from "@/components/Product/ProductList";
import useProductFinder from "@/hooks/useProductFinder";
import useSearch from "@/hooks/useSearch";
import Spinner from "@/components/Spinner";

function ProductFinder() {
  const { products, isLoading, error } = useProductFinder();
  const { value, handleSearch } = useSearch();

  if (isLoading) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-80">
        <div className="flex items-center justify-center pt-48">
          <Spinner />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-80">
        Error:
        {error?.message}
      </section>
    );
  }
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-80">
      <section>
        <SearchInput onSearch={handleSearch} />
      </section>
      <section>
        <ProductList products={products} searchTerm={value} />
      </section>
    </section>
  );
}

export default ProductFinder;
