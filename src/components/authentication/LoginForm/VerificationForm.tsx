import VerificationInput from "react-verification-input";
import TimerCountDown from "./TimerCountDown";

export default function VerificationForm() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <VerificationInput
        length={5}
        placeholder=""
        classNames={{
          container: "w-[528px] h-[80px] justify-between",
        }}
      />
      <TimerCountDown />
    </div>
  );
}
