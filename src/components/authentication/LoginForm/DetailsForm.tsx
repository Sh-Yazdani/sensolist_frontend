"useClient";

import { LoginInputs } from "@/types/general";
import { ArrowRight } from "iconsax-react";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CustomPhoneInput } from "../../PhoneInput";
import { PasswordInput } from "../../UI/PasswordInput";
import SubmitButton from "../SubmitButton";
import TermsAgreement from "../TermsAgreement";

interface DetailsFormProps {
  goToVerification: () => void;
  changePhoneNumber: (num: string) => void;
}

export default function DetailsForm({
  goToVerification,
  changePhoneNumber,
}: DetailsFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginInputs>();

  const [termsChecked, setTermsChecked] = useState<boolean>(false);
  const [termsError, setTermsError] = useState<string>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    if (termsChecked) {
      changePhoneNumber(data.phoneNumber);
      goToVerification();
    } else {
      setTermsError("Please agree with terms and policies.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mt-6 md:mt-8 lg:mt-10 h-full flex flex-col"
    >
      <Controller
        name="phoneNumber"
        control={control}
        rules={{ required: true }}
        render={({ field: { ref, ...field } }) => (
          <CustomPhoneInput
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
      <PasswordInput
        register={register}
        name="password"
        label="Password"
        className="mt-8"
        placeholder="Enter your password"
        error={
          errors.password?.type === "required" ? "This field is required" : ""
        }
      />
      <TermsAgreement
        error={termsError}
        setIsChecked={setTermsChecked}
        isChecked={termsChecked}
      />
      <SubmitButton className="mt-auto">
        Continue
        <ArrowRight className="ml-2" />
      </SubmitButton>
    </form>
  );
}
