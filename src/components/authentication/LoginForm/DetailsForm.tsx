import { LoginInputs } from "@/app/types/general";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { CustomPhoneInput } from "../PhoneInput";
import { TextInput } from "../TextInput";

export default function DetailsForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => console.log(data);

  console.log(watch("phoneNumber"));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mt-10 md:mt-14 lg:mt-20"
    >
      <CustomPhoneInput
        register={register}
        name="phoneNumber"
        label="Phone number"
      />
      <TextInput
        register={register}
        name="password"
        label="Password"
        className="mt-8"
        type="password"
        placeholder="Enter your password"
      />
      <Link
        href="/authentication/forgetPassword"
        className="flex mt-2 text-white-opacity-900 ml-auto w-fit"
      >
        Forgot password?
      </Link>
    </form>
  );
}
