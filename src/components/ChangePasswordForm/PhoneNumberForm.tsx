import { ArrowRight } from "iconsax-react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CustomPhoneInput } from "../PhoneInput";
import Button from "../UI/Button";

interface PhoneNumberInputs {
  phoneNumber: string;
}

export default function PhoneNumberForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PhoneNumberInputs>();

  const onSubmit: SubmitHandler<PhoneNumberInputs> = (data) => {};
  return (
    <form
      className="mt-8 flex flex-1 flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="phoneNumber"
        control={control}
        rules={{ required: true }}
        render={({ field: { ref, ...field } }) => (
          <CustomPhoneInput
            placeholder="Enter your phone number"
            ref={ref}
            label="Phone number"
            {...field}
            error={
              errors.phoneNumber?.type === "required"
                ? "This field is required"
                : ""
            }
          />
        )}
      />
      <Button type="submit" className="mt-auto w-full">
        continue <ArrowRight />
      </Button>
    </form>
  );
}
