"use client";

import { Controller, useForm } from "react-hook-form";
import ProfileUploadPhoto from "../ProfileUploadPhoto";
import Input from "../UI/Input";
import { CustomPhoneInput } from "../authentication/PhoneInput";

interface IEditProfileInputs {
  photo?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export default function ProfileEditForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IEditProfileInputs>();
  return (
    <form>
      <ProfileUploadPhoto register={register} name="photo" />
      <Input
        register={register}
        name="firstName"
        label="First name"
        className="mt-8"
        error={
          errors.firstName?.type === "required" ? "This field is required" : ""
        }
      />
      <Input
        register={register}
        name="lastName"
        label="Last name"
        className="mt-6"
        error={
          errors.firstName?.type === "required" ? "This field is required" : ""
        }
      />
      <Controller
        name="phoneNumber"
        control={control}
        rules={{ required: true }}
        render={({ field: { ref, ...field } }) => (
          <CustomPhoneInput
            ref={ref}
            label="Phone number"
            className="mt-6"
            variant="simple"
            {...field}
            error={
              errors.phoneNumber?.type === "required"
                ? "This field is required"
                : ""
            }
          />
        )}
      />
    </form>
  );
}
