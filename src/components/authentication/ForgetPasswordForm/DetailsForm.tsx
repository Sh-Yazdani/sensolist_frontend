"use client";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CustomPhoneInput } from "../PhoneInput";
import SubmitButton from "../SubmitButton";

export default function DetailsForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<{ phoneNumber: string }>();

  const onSubmit: SubmitHandler<{ phoneNumber: string }> = (data) => {
    console.log(data);
    // goToVerification();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mt-10 md:mt-14 lg:mt-20"
    >
      <Controller
        name="phoneNumber"
        control={control}
        rules={{ required: true }}
        render={({ field: { ref, ...field } }) => (
          <CustomPhoneInput ref={ref} label="Phone number" {...field} />
        )}
      />
      <SubmitButton className="mt-20 lg:mb-[142px]">Submit</SubmitButton>
    </form>
  );
}
