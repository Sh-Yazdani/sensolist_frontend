import { LoginInputs } from "@/app/types/general";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  register: UseFormRegister<LoginInputs>;
  name: keyof LoginInputs;
  defaultValue?: string;
  label: string;
}

export function TextInput({
  register,
  name,
  defaultValue,
  label,
  ...rest
}: InputProps) {
  return (
    <label className="w-full">
      <span className="mb-2 md:text-xl">{label}</span>
      <input
        className="w-full bg-transparent border border-white-opacity-800 
        bg-gradient-opacity rounded-lg h-[45px] md:h-[60px] focus-visible:outline-none"
        {...register(name)}
        {...rest}
      />
    </label>
  );
}
