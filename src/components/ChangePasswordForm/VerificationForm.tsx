import { createAlert } from "@/lib/features/notification/notificatioSlice";
import { toggleMenu } from "@/lib/features/profile/profileSlice";
import { ArrowRight } from "iconsax-react";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import VerificationInput from "react-verification-input";
import TimerCountDown from "../authentication/TimerCountdown/index.tsx";
import Button from "../UI/Button";
import FormError from "../UI/FormError";

export default function VerificationForm({
  resetForm,
}: {
  resetForm: () => void;
}) {
  const dispatch = useDispatch();
  const [error, setError] = useState<string>();
  const [verificationValue, setVerificationValue] = useState<string>();
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("on submit");
    dispatch(toggleMenu({ menuOpen: true }));
    dispatch(createAlert({ message: "Password changed.", type: "success" }));
    resetForm();
    if (!verificationValue) {
      setError("This field is required");
    }
  };
  return (
    <form className="mt-8 flex flex-1 flex-col" onSubmit={submitHandler}>
      <div className="relative profile mt-8">
        <VerificationInput
          length={5}
          placeholder=""
          onComplete={(val) => {
            setError("");
            setVerificationValue(val);
            console.log(val);
          }}
          classNames={{
            container: "justify-between max-w-[280px] lg:max-w-[340px] mx-auto",
          }}
          inputProps={{
            className: "bg-error",
          }}
        />
        {error && <FormError error="error" />}
      </div>
      <div className="w-full flex justify-center">
        <TimerCountDown />
      </div>
      <Button type="submit" className="w-full mt-auto">
        Continue
        <ArrowRight />
      </Button>
    </form>
  );
}
