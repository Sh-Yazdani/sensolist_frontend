"use client";

import { LoginStepsType } from "@/types/general";
import { useState } from "react";
import FormHeader from "../FormHeader";
import DetailsForm from "./DetailsForm";
import VerificationForm from "./VerificationForm";

export default function LoginForm() {
  const [formStep, setFormStep] = useState<LoginStepsType>("details");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otpToken, setOtpToken] = useState<string>();

  return (
    <>
      <FormHeader
        title={formStep === "details" ? "Login" : "Verification Code"}
        description={
          formStep === "details"
            ? "Please enter your details."
            : `Please enter the OTP sent to ${phoneNumber}`
        }
      />
      {formStep === "details" ? (
        <DetailsForm
          setOtpToken={(token: string) => {
            setOtpToken(token);
          }}
          changePhoneNumber={(num: string) => setPhoneNumber(num)}
          goToVerification={() => {
            setFormStep("verification");
          }}
        />
      ) : (
        <VerificationForm otpToken={otpToken || ""} />
      )}
    </>
  );
}
