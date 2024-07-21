"use client";

import { InputHTMLAttributes, useEffect, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import FormError from "../FormError";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<any>;
  name: string;
  label: string;
  className?: string;
  placeholder?: string;
  error?: string;
  initialValue?: string;
}

export default function Input({
  register,
  name,
  label,
  className,
  placeholder,
  error,
  initialValue,
  ...rest
}: InputProps) {
  const { type } = rest;
  const [value, setValue] = useState(initialValue ? initialValue : "");
  useEffect(() => {
    setValue(initialValue ? initialValue : "");
  }, [initialValue]);
  console.log("value", value, initialValue);
  return (
    <label className={`relative flex flex-col w-full ${className}`}>
      <span className=" text-sm md:text-base dark:text-white">{label}</span>
      <input
        value={value}
        placeholder={placeholder}
        {...register(name, {
          onChange(event) {
            console.log(event.target.value);
            setValue(event.target.value);
          },
          required: true,
        })}
        type={type}
        className={` border border-neutral-6 rounded-lg py-3 px-4 mt-2 text-sm backdrop-blur-[30px] bg-transparent
             placeholder:text-neutral-6 placeholder:text-sm focus-visible:outline-none dark:text-neutral-2`}
      />
      {error && <FormError error={error} />}
    </label>
  );
}
