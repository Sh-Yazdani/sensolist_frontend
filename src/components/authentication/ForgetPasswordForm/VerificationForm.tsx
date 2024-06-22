import { useState } from "react";
import VerificationInput from "react-verification-input";
import SubmitButton from "../SubmitButton";
import TimerCountDown from "../TimerCountdown/index.tsx";

interface VerificationFormProps {
  goToResetPassword: () => void;
}

export default function VerificationForm({
  goToResetPassword,
}: VerificationFormProps) {
  const [verificationValue, setVerificationValue] = useState<string>();
  const submitHandler = () => {
    console.log(verificationValue);
    if (verificationValue) goToResetPassword();
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col items-center justify-center mt-20"
    >
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
      <TimerCountDown />
      <SubmitButton className="mt-20 lg:mb-[142px]">Submit</SubmitButton>
    </form>
  );
}
