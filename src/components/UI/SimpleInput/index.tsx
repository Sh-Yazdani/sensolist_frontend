"use client";

import { UseFormRegister } from "react-hook-form";
import FormError from "../FormError";

interface SimpleInputProps {
  value: string;
  onChange: (val: string) => void;
  className?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  required?: boolean;
  name: string;
  error?: string;
}

export default function SimpleInput({
  value,
  onChange,
  className,
  placeholder,
  register,
  name,
  required,
  error,
}: SimpleInputProps) {
  console.log("error", error);
  return (
    <div className={`relative ${className}`}>
      <input
        {...register(name, {
          required: required,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
          },
        })}
        placeholder={placeholder}
        value={value === "" ? undefined : value}
        // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        //   onChange(e.target.value);
        // }}
        className={` border border-neutral-6 rounded-lg py-3 px-4 text-sm backdrop-blur-[30px] bg-transparent w-full
    placeholder:text-neutral-6 placeholder:text-sm focus-visible:outline-none dark:text-neutral-2`}
      />
      {error && <FormError error={error} />}
    </div>
  );
}
