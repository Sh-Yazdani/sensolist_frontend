"use client";

import { useForm } from "react-hook-form";
import ProfileUploadPhoto from "../ProfileUploadPhoto";

interface IEditProfileInputs {
  photo?: string;
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
    </form>
  );
}
