import FormError from "@/components/UI/FormError";
import { FormEvent, useState } from "react";
import VerificationInput from "react-verification-input";
import SubmitButton from "../SubmitButton";
import TimerCountDown from "../TimerCountdown/index.tsx";

interface VerificationFormProps {
  goToResetPassword: () => void;
}

export default function VerificationForm({
  goToResetPassword,
}: VerificationFormProps) {
  const [error, setError] = useState<string>();
  const [verificationValue, setVerificationValue] = useState<string>();
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!verificationValue) {
      setError("This field is required");
    }
    if (verificationValue) goToResetPassword();
  };
  return (
    <form
      onSubmit={submitHandler}
      className=" flex flex-col items-center justify-center mt-20"
    >
      <div className="relative">
        <VerificationInput
          onComplete={(val) => {
            setVerificationValue(val);
            console.log(val);
          }}
          length={5}
          placeholder=""
          classNames={{
            container: "lg:w-[528px] h-[80px] justify-between",
          }}
        />
        {error && <FormError error={error} />}
      </div>
      <TimerCountDown />
      <SubmitButton className="mt-20 lg:mb-[120px]">Submit</SubmitButton>
    </form>
  );
}
