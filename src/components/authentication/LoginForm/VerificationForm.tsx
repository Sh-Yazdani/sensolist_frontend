import FormError from "@/components/UI/FormError";
import { createAlert } from "@/lib/features/notification/notificatioSlice";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import VerificationInput from "react-verification-input";
import SubmitButton from "../SubmitButton";
import TimerCountDown from "../TimerCountdown/index.tsx";

interface VerificationFormProps {
  otpToken: string;
  getOtp: () => Promise<void>;
}

export default function VerificationForm({
  otpToken,
  getOtp,
}: VerificationFormProps) {
  const [error, setError] = useState<string>();
  const [verificationValue, setVerificationValue] = useState<string>();

  const router = useRouter();
  const dispatch = useDispatch();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const resault = await signIn("credentials", {
      redirect: false,
      otpToken: otpToken,
      code: verificationValue,
    });
    if (resault?.ok) {
      router.push("/");
    } else if (resault?.error) {
      dispatch(createAlert({ message: resault.error, type: "error" }));
    }
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
        <TimerCountDown getOtp={getOtp} />
        <SubmitButton className="mt-auto">Login</SubmitButton>
      </form>
    </>
  );
}
