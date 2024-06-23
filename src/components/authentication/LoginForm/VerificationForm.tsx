import { Warning2 } from "iconsax-react";
import { FormEvent, useState } from "react";
import VerificationInput from "react-verification-input";
import SubmitButton from "../SubmitButton";
import TimerCountDown from "../TimerCountdown/index.tsx";

export default function VerificationForm() {
  const [error, setError] = useState<string>();
  const [verificationValue, setVerificationValue] = useState<string>();
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!verificationValue) {
      setError("This field is required");
    }
  };
  return (
    <form
      onSubmit={submitHandler}
      className=" flex flex-col items-center justify-center mt-20"
    >
      <div className="relative">
        <VerificationInput
          length={5}
          placeholder=""
          onComplete={(val) => {
            setError("");
            setVerificationValue(val);
            console.log(val);
          }}
          classNames={{
            container: "lg:w-[528px] h-[80px] justify-between",
          }}
          inputProps={{
            className: "bg-error",
          }}
        />
        {error && (
          <div
            className="rounded bg-error text-sm text-white py-1 px-2 flex items-center
        absolute bottom-[-2.25rem]"
          >
            <Warning2 /> {error}
          </div>
        )}
      </div>
      <TimerCountDown />
      <SubmitButton className="mt-20 lg:mb-[120px]">Login</SubmitButton>
    </form>
  );
}
