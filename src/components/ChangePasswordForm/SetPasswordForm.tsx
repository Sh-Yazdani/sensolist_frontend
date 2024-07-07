import { createAlert } from "@/lib/features/notification/notificatioSlice";
import { toggleMenu } from "@/lib/features/profile/profileSlice";
import { ArrowRight } from "iconsax-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import { PasswordInput } from "../UI/PasswordInput";

interface SetPasswordForm {
  resetForm: () => void;
}

interface SetPasswordInputs {
  confirmPassword: string;
  password: string;
}

export default function SetPasswordForm({ resetForm }: SetPasswordForm) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SetPasswordInputs>();

  const onSubmit: SubmitHandler<SetPasswordInputs> = (data) => {
    console.log("on submit");
    dispatch(toggleMenu({ menuOpen: true }));
    dispatch(createAlert({ message: "Password changed.", type: "success" }));
    resetForm();
  };

  return (
    <form
      className="mt-8 flex flex-1 flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <PasswordInput
        register={register}
        name="password"
        label="New password"
        className="mt-8"
        placeholder="Enter a new password"
        simple
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
        simple
        error={
          errors.confirmPassword?.type === "required"
            ? "This field is required"
            : ""
        }
      />
      <Button type="submit" className="mt-auto w-full">
        continue <ArrowRight />
      </Button>
    </form>
  );
}
