import { Warning2 } from "iconsax-react";
import VerificationInput from "react-verification-input";
import SubmitButton from "../SubmitButton";
import TimerCountDown from "../TimerCountdown/index.tsx";

interface VerificationFormProps {
  error?: string;
}

export default function VerificationForm({ error }: VerificationFormProps) {
  return (
    <div className=" flex flex-col items-center justify-center mt-20">
      <div className="relative">
        <VerificationInput
          length={5}
          placeholder=""
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
      <SubmitButton className="mt-20 lg:mb-[142px]">Login</SubmitButton>
    </div>
  );
}
