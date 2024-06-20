"useClient";

import { LoginInputs } from "@/app/types/general";
import Link from "next/link";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CustomPhoneInput } from "../PhoneInput";
import SubmitButton from "../SubmitButton";
import TermsAgreement from "../TermsAgreement";
import { TextInput } from "../TextInput";

export default function DetailsForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<LoginInputs>();
  const [termsChecked, setTermsChecked] = useState<boolean>(false);
  const onSubmit: SubmitHandler<LoginInputs> = (data) => console.log(data);

  // console.log(watch("phoneNumber"));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mt-10 md:mt-14 lg:mt-20"
    >
      <Controller
        name="phoneNumber"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomPhoneInput label="Phone number" {...field} />
        )}
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
      <TermsAgreement setIsChecked={setTermsChecked} isChecked={termsChecked} />
      <SubmitButton className="mt-10 lg:mt-[56px]" />
    </form>
  );
}
