"use client";

import { LoginInputs } from "@/app/types/general";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface InputProps {
  register?: UseFormRegister<LoginInputs>;
  name?: keyof LoginInputs;
  label?: string;
}

export function CustomPhoneInput({
  label,
  register,
  name,
  ...rest
}: InputProps) {
  const [value, setValue] = useState<string>("");
  return (
    <label className="w-full">
      <span className="mb-4 md:text-xl">{label}</span>
      <PhoneInput
        country={"us"}
        value={value}
        onChange={(phone) => {
          console.log(phone);
        }}
        // inputProps={register(name, { required: true })}
        inputClass="!h-[45px] lg:!h-[60px] !w-full mt-2 flex"
      />
    </label>
  );
}
