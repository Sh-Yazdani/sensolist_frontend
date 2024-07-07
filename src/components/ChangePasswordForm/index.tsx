"use client";

import { ChangePasswordStepsType } from "@/types/general";
import { useState } from "react";
import FormHeader from "./FormHeader";
import PhoneNumberForm from "./PhoneNumberForm";

export default function ChangePasswordForm() {
  const [formStep, setFormStep] =
    useState<ChangePasswordStepsType>("phoneNumber");
  return (
    <>
      <FormHeader
        title="change password"
        description="Enter the phone number related to this account. We will send you a
        verification code"
      />
      {formStep === "phoneNumber" ? (
        <PhoneNumberForm
          goToNextStep={() => {
            setFormStep("verification");
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
}
