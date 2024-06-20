import { LoginInputs } from "@/app/types/general";
import { UseFormRegister } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface InputProps {
  register: UseFormRegister<LoginInputs>;
  name: keyof LoginInputs;
  label: string;
}

export function CustomPhoneInput({
  label,
  register,
  name,
  ...rest
}: InputProps) {
  return (
    <label className="w-full">
      <span className="mb-2 md:text-xl">{label}</span>
      <PhoneInput
        placeholder=""
        inputProps={{ ...register(name) }}
        inputClass="!h-[45px] lg:!h-[60px] !w-full"
      />
    </label>
  );
}
