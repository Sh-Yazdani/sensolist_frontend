"use client";

import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CustomPhoneInput } from "../authentication/PhoneInput";
import ProfileUploadPhoto from "../ProfileUploadPhoto";
import Button from "../UI/Button";
import Input from "../UI/Input";

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

  const onSubmit: SubmitHandler<IEditProfileInputs> = (data) => {
    console.log(data);
  };
  const router = useRouter();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-[calc(100vh-164px)] md:h-full flex flex-col"
    >
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
      <div className="mt-auto flex flex-col">
        <Button type="submit">Submit</Button>
        <Button
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            event.preventDefault();
            router.push("/profile");
          }}
          variant="secondary"
          className="mt-4 md:mt-0"
        >
          Discard
        </Button>
      </div>
    </form>
  );
}
