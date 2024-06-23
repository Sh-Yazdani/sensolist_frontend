"use client";

import { ForgetPasswordStepsType } from "@/app/types/general";
import { useState } from "react";
import FormHeader from "../FormHeader";
import DetailsForm from "./DetailsForm";
import ResetPasswordForm from "./ResetPasswordForm";
import VerificationForm from "./VerificationForm";

export default function ForgetPasswordForm() {
  const [formStep, setFormStep] =
    useState<ForgetPasswordStepsType>("phoneNumber");
  return (
    <>
      <FormHeader
        title={
          formStep === "phoneNumber"
            ? "Forgot password?"
            : formStep === "verification"
            ? "You received a code!"
            : "Reset password"
        }
        description={
          formStep === "phoneNumber"
            ? "Don’t worry. We will send a code to your registered mobile number."
            : formStep === "verification"
            ? "Enter the code which has been sent to you."
            : "Please enter a new password"
        }
      />
      {formStep === "phoneNumber" ? (
        <DetailsForm
          goToVerification={() => {
            setFormStep("verification");
          }}
        />
      ) : formStep === "verification" ? (
        <VerificationForm
          goToResetPassword={() => {
            setFormStep("reset");
          }}
        />
      ) : (
        <ResetPasswordForm />
      )}
    </>
  );
}
