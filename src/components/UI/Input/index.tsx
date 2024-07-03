"use client";

import { UseFormRegister } from "react-hook-form";

interface InputProps {
  register: UseFormRegister<any>;
  name: string;
  label: string;
  className?: string;
  placeholder?: string;
  error?: string;
}

export default function Input({
  register,
  name,
  label,
  className,
  placeholder,
  error,
}: InputProps) {
  return (
    <label className={`flex flex-col w-full ${className}`}>
      <span>{label}</span>
      <input
        placeholder={placeholder}
        {...register(name, { required: true })}
        className={` border  rounded-lg py-3 px-4 mt-2
             placeholder:text-neutral-6 placeholder:text-sm 
             ${error ? "border-error" : "border-neutral-6"}`}
      />
    </label>
  );
}
