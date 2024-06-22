"use client";

import { Eye, EyeSlash } from "iconsax-react";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  register: UseFormRegister<any>;
  name: string;
  label: string;
  className?: string;
  placeholder?: string;
}

export function PasswordInput({
  label,
  register,
  name,
  className,
  placeholder,
}: InputProps) {
  const [type, setType] = useState<"password" | "text">("password");
  return (
    <label className={`w-full flex flex-col relative ${className}`}>
      <span className="mb-2 md:text-xl">{label}</span>
      <input
        placeholder={placeholder}
        type={type}
        {...register(name, { required: true })}
        className=" focus-visible:outline-none bg-gradient-opacity h-[45px] md:h-[60px] rounded-lg
        border border-white-opacity-900 px-2 placeholder:text-white-opacity-700 placeholder:text-sm"
      />
      <button
        onClick={() => {
          setType((prev) => (prev === "password" ? "text" : "password"));
        }}
        className=" absolute bottom-[18px] right-4"
      >
        {type === "password" ? <Eye /> : <EyeSlash />}
      </button>
    </label>
  );
}
