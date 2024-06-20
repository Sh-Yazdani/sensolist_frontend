"use client";

import { LoginStepsType } from "@/app/types/general";
import { useState } from "react";
import DetailsForm from "./DetailsForm";

export default function LoginForm() {
  const [formStep, setFormStep] = useState<LoginStepsType>("details");
  return <>{formStep === "details" ? <DetailsForm /> : <></>}</>;
}
