"use client";

import { ChangePasswordStepsType } from "@/types/general";
import { useEffect, useState } from "react";
import FormHeader from "./FormHeader";
import PhoneNumberForm from "./PhoneNumberForm";
import VerificationForm from "./VerificationForm";

export default function ChangePasswordForm() {
  const [formStep, setFormStep] =
    useState<ChangePasswordStepsType>("phoneNumber");
  useEffect(() => {
    console.log("useeffect change password");
  }, []);
  return (
    <>
      {formStep === "phoneNumber" ? (
        <>
          <FormHeader
            title="change password"
            description="Enter the phone number related to this account. We will send you a
        verification code"
          />
          <PhoneNumberForm
            goToNextStep={() => {
              setFormStep("verification");
            }}
          />
        </>
      ) : (
        <>
          <FormHeader
            title="You received a code!"
            description="Enter the code which has been sent to you."
          />
          <VerificationForm
            resetForm={() => {
              setFormStep("phoneNumber");
            }}
          />
        </>
      )}
    </>
  );
}
