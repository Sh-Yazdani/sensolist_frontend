"use client";

import { Eye, EyeSlash, Warning2 } from "iconsax-react";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  register: UseFormRegister<any>;
  name: string;
  label: string;
  className?: string;
  placeholder?: string;
  error?: string;
}

export function PasswordInput({
  label,
  register,
  name,
  className,
  placeholder,
  error,
}: InputProps) {
  const [type, setType] = useState<"password" | "text">("password");
  return (
    <label className={`w-full flex flex-col relative ${className}`}>
      <span className="mb-2 md:text-xl">{label}</span>
      <input
        placeholder={placeholder}
        type={type}
        {...register(name, { required: true })}
        className={` focus-visible:outline-none bg-gradient-opacity 
        h-[45px] md:h-[60px] rounded-lg px-2
        border ${error ? "border-error" : "border-white-opacity-900"} 
        placeholder:text-white-opacity-700 placeholder:text-sm`}
      />
      {error && (
        <div
          className="rounded bg-error text-sm text-white py-1 px-2 flex items-center
        absolute bottom-[-2.25rem]"
        >
          <Warning2 /> {error}
        </div>
      )}
      <button
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          event.preventDefault();
          setType((prev) => (prev === "password" ? "text" : "password"));
        }}
        className=" absolute bottom-[18px] right-4"
      >
        {type === "password" ? <Eye /> : <EyeSlash />}
      </button>
    </label>
  );
}
