"use client";

import { LoginInputs } from "@/app/types/general";
import { RefCallBack, UseFormRegister } from "react-hook-form";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface InputProps {
  register?: UseFormRegister<LoginInputs>;
  name?: keyof LoginInputs;
  label?: string;
  ref: RefCallBack;
}

export function CustomPhoneInput({
  label,
  register,
  name,
  ref,
  ...rest
}: InputProps) {
  return (
    <label className="w-full">
      <span className="mb-4 md:text-xl">{label}</span>
      <ReactPhoneInput
        inputClass="!h-[45px] lg:!h-[60px] !w-full mt-2 flex"
        {...rest}
      />
    </label>
  );
}
