import { ResetPasswordInputs } from "@/types/general";
import { SubmitHandler, useForm } from "react-hook-form";
import { PasswordInput } from "../../UI/PasswordInput";
import SubmitButton from "../SubmitButton";

export default function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ResetPasswordInputs>();

  const onSubmit: SubmitHandler<ResetPasswordInputs> = (data) => {
    console.log("reset pass submit");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mt-10 md:mt-14 lg:mt-20"
    >
      <PasswordInput
        register={register}
        name="password"
        label="New password"
        className="mt-8"
        placeholder="Enter a new password"
        error={
          errors.password?.type === "required" ? "This field is required" : ""
        }
      />
      <PasswordInput
        register={register}
        name="confirmPassword"
        label="Confirm new password"
        className="mt-8"
        placeholder="Enter new password again"
        error={
          errors.confirmPassword?.type === "required"
            ? "This field is required"
            : ""
        }
      />
      <SubmitButton className="mt-10 lg:mb-[120px]">
        reset password
      </SubmitButton>
    </form>
  );
}
