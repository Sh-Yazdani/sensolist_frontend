import { LoginInputs } from "@/app/types/general";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "../TextInput";

export default function DetailsForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => console.log(data);

  console.log(watch("phoneNumber"));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mt-10 md:mt-14 lg:mt-20"
    >
      <TextInput register={register} name="phoneNumber" label="Phone number" />
      {/* <TextInput defaultValue="" {...register("password", { required: true })} /> */}
    </form>
  );
}
