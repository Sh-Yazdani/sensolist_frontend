"use client";

import { useForm } from "react-hook-form";
import ProfileUploadPhoto from "../ProfileUploadPhoto";
import Input from "../UI/Input";

interface IEditProfileInputs {
  photo?: string;
  firstName: string;
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
    </form>
  );
}
