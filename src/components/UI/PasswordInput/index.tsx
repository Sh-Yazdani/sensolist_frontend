"use client";

import FormError from "@/components/UI/FormError";
import { Eye, EyeSlash } from "iconsax-react";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  register: UseFormRegister<any>;
  name: string;
  label: string;
  className?: string;
  placeholder?: string;
  error?: string;
  simple?: boolean;
}

export function PasswordInput({
  label,
  register,
  name,
  className,
  placeholder,
  error,
  simple,
}: InputProps) {
  const [type, setType] = useState<"password" | "text">("password");
  return (
    <label className={`w-full flex flex-col relative ${className}`}>
      <span className="mb-2 text-sm lg:text-base dark:text-white">{label}</span>
      <input
        placeholder={placeholder}
        type={type}
        {...register(name, { required: true })}
        className={` focus-visible:outline-none h-[45px] md:h-[60px] 
          rounded-lg px-2 placeholder:text-xs border bg-transparent ${
            error
              ? "border-error"
              : simple
              ? "border-neutral-6"
              : "border-white-opacity-900"
          } 
        ${
          simple
            ? " backdrop-blur-[30px] placeholder:text-neutral-7 dark:placeholder:text-neutral-4 dark:text-white"
            : "placeholder:text-white-opacity-700 bg-gradient-opacity"
        }`}
      />
      {error && <FormError error={error} />}
      <button
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          event.preventDefault();
          setType((prev) => (prev === "password" ? "text" : "password"));
        }}
        className=" absolute bottom-[9px] lg:bottom-4 right-4"
      >
        {type === "password" ? (
          <Eye className="dark:text-white" />
        ) : (
          <EyeSlash className="dark:text-white" />
        )}
      </button>
    </label>
  );
}
