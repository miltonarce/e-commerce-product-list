import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useLocation } from "wouter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
  const { isLoading, error, addProduct } = useProductFinder();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IAddNewProduct> = async (data) => {
    const response = await addProduct(data);
    if (response) {
      navigate(ERoutes.HOME, { replace: true });
    };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit as any)}>
      <div>
        <input placeholder="name" {...register("name", { required: true })} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <input placeholder="price" defaultValue={0} {...register("price", { required: true })} />
        {errors.price && <span>{errors.price.message}</span>}
      </div>

      <div>
        <textarea {...register("description")} />
      </div>

      <div>
        {isLoading ? <div>Loading...</div> : <input type="submit" />}
      </div>
      {error && <div>{error}</div>}
    </form>
  );
}

export default AddNewProductForm;
