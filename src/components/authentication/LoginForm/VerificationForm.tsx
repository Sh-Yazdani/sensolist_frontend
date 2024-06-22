import VerificationInput from "react-verification-input";
import SubmitButton from "../SubmitButton";
import TimerCountDown from "../TimerCountdown/index.tsx";
export default function VerificationForm() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <VerificationInput
        length={5}
        placeholder=""
        classNames={{
          container: "lg:w-[528px] h-[80px] justify-between",
        }}
      />
      <TimerCountDown />
      <SubmitButton className="mt-20 lg:mb-[142px]">Login</SubmitButton>
    </div>
  );
}
