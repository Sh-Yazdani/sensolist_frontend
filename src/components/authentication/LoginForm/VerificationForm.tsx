import FormError from "@/components/UI/FormError";
import { createAlert } from "@/lib/features/notification/notificatioSlice";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import VerificationInput from "react-verification-input";
import SubmitButton from "../SubmitButton";
import TimerCountDown from "../TimerCountdown/index.tsx";

export default function VerificationForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState<string>();
  const [verificationValue, setVerificationValue] = useState<string>();
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("on submit");
    dispatch(createAlert({ message: "login success", type: "success" }));
    if (!verificationValue) {
      setError("This field is required");
    }
  };
  return (
    <>
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
              container: "justify-between max-w-[280px] lg:max-w-[340px]",
            }}
            inputProps={{
              className: "bg-error",
            }}
          />
          {error && <FormError error="error" />}
        </div>
        <TimerCountDown />
        <SubmitButton className="mt-20 lg:mb-[120px]">Login</SubmitButton>
      </form>
    </>
  );
}
