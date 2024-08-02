import { sendOtpToken } from "@/ApiCall/authentication";
import FormError from "@/components/UI/FormError";
import { createAlert } from "@/lib/features/notification/notificatioSlice";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import VerificationInput from "react-verification-input";
import SubmitButton from "../SubmitButton";
import TimerCountDown from "../TimerCountdown/index.tsx";

interface VerificationFormProps {
  otpToken: string;
}

export default function VerificationForm({ otpToken }: VerificationFormProps) {
  const dispatch = useDispatch();
  const [error, setError] = useState<string>();
  const [verificationValue, setVerificationValue] = useState<string>();
  const router = useRouter();
  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("event", verificationValue);
    const response = await sendOtpToken(verificationValue || "", otpToken);
    if (response.statusCode === 200) {
    } else if (response.message) {
      dispatch(createAlert({ message: response.message, type: "error" }));
    }
    // router.push("/");
    // dispatch(createAlert({ message: "login success", type: "success" }));
    // if (!verificationValue) {
    //   setError("This field is required");
    // }
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        className=" flex flex-col items-center justify-center mt-20 h-full"
      >
        <div className="relative">
          <VerificationInput
            length={5}
            placeholder=""
            onComplete={(val) => {
              setError("");
              setVerificationValue(val);
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
        <SubmitButton className="mt-auto">Login</SubmitButton>
      </form>
    </>
  );
}
