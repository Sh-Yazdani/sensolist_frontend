import { UseFormRegister } from "react-hook-form";

interface InputProps {
  register: UseFormRegister<any>;
  name: string;
  label: string;
  type?: string;
  className?: string;
  placeholder?: string;
}

export function TextInput({
  label,
  register,
  name,
  type,
  className,
  placeholder,
}: InputProps) {
  return (
    <label className={`w-full flex flex-col ${className}`}>
      <span className="mb-2 md:text-xl">{label}</span>
      <input
        placeholder={placeholder}
        type={type}
        {...register(name, { required: true })}
        className=" focus-visible:outline-none bg-gradient-opacity h-[45px] md:h-[60px] rounded-lg
        border border-white-opacity-900 px-2 placeholder:text-white-opacity-700 placeholder:text-sm"
      />
    </label>
  );
}
