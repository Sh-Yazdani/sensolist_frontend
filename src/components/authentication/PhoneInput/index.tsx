"use client";

import { LoginInputs } from "@/types/general";
import { Warning2 } from "iconsax-react";
import { RefCallBack, UseFormRegister } from "react-hook-form";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface InputProps {
  register?: UseFormRegister<LoginInputs>;
  name?: keyof LoginInputs;
  label?: string;
  ref: RefCallBack;
  error?: string;
  className?: string;
  variant?: "simple";
}

export function CustomPhoneInput({
  label,
  register,
  name,
  ref,
  error,
  className,
  variant,
  ...rest
}: InputProps) {
  return (
    <label className={`w-full relative flex flex-col ${className}`}>
      <span className="mb-1 text-sm lg:text-base">{label}</span>
      <ReactPhoneInput
        disableSearchIcon
        enableSearch={true}
        containerClass="simple"
        placeholder=""
        searchPlaceholder="Search for country"
        inputClass={`!h-[45px] lg:!h-[60px] !w-full mt-2 flex ${
          error && "border !border-error"
        } ${variant === "simple" && "simple  !border-neutral-6"}`}
        {...rest}
      />
      {error && (
        <div
          className="rounded bg-error text-sm text-white py-1 px-2 flex items-center
        absolute bottom-[-2.25rem]"
        >
          <Warning2 /> {error}
        </div>
      )}
    </label>
  );
}
