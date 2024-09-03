import AddNewProductForm from "@/components/Product/Forms/AddNewProductForm";

function ProductAddNew() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-80">
      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">Add new Product</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          In this form you can add a new product for your e-commerce.
        </p>
        <AddNewProductForm />
      </div>
    </section>
  );
}

export default ProductAddNew;
