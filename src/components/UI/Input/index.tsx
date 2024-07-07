"use client";

import { UseFormRegister } from "react-hook-form";
import FormError from "../FormError";

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
    <label className={`relative flex flex-col w-full ${className}`}>
      <span className=" text-sm md:text-base dark:text-white">{label}</span>
      <input
        placeholder={placeholder}
        {...register(name, { required: true })}
        className={` border border-neutral-6 rounded-lg py-3 px-4 mt-2 text-sm backdrop-blur-[30px] bg-transparent lg:h-[60px]
             placeholder:text-neutral-6 placeholder:text-sm focus-visible:outline-none dark:text-neutral-2`}
      />
      {error && <FormError error={error} />}
    </label>
  );
}
