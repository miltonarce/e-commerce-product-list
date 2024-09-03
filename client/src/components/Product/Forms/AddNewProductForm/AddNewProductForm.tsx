import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useLocation } from "wouter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import type { IAddNewProduct } from "@/types/product";
import useProductFinder from "@/hooks/useProductFinder";
import { ERoutes } from "@/routes/definitions";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    price: yup.number().typeError("Price must be a number").required("Price is required"),
    description: yup.string().notRequired(),
  })
  .required();

function AddNewProductForm() {
  const [_, navigate] = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const { isLoading, error, addProduct } = useProductFinder();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IAddNewProduct> = async (data) => {
    const response = await addProduct(data);
    if (response) {
      enqueueSnackbar("Product added successfully", { variant: "success" });
      navigate(ERoutes.HOME, { replace: true });
    };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit as any)} className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-4">
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
          Product name
        </label>
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <input
            placeholder="Product name"
            id="name"
            {...register("name", { required: true })}
            className="block flex-1 border-0 bg-white py-1.5 pl-2
         text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        {errors.name && <span className="text-sm text-red-600">{errors.name.message}</span>}
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
          Price
        </label>
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <input
            placeholder="Product price"
            id="price"
            {...register("price", { required: true })}
            className="block flex-1 border-0 bg-white py-1.5 pl-2
         text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        {errors.price && <span className="text-sm text-red-600">{errors.price.message}</span>}
      </div>

      <div className="col-span-full border-b border-gray-900/10 pb-12">
        <label htmlFor="description" id="description" className="block text-sm font-medium leading-6 text-gray-900">
          Description
        </label>
        <textarea
          rows={3}
          placeholder="Add a description"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
          ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
          {...register("description")}
        />
      </div>

      <div className="col-span-full flex items-center justify-end gap-x-6">

        <button
          disabled={isLoading}
          type="submit"
          className={`rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {isLoading ? "Loading..." : "Add product"}
        </button>

      </div>
      {error && <div className="text-sm text-red-600">{error}</div>}
    </form>
  );
}

export default AddNewProductForm;
