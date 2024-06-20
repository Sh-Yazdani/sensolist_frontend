import { ArrowRight } from "iconsax-react";

interface SubmitButtonProps {
  className?: string;
}

export default function SubmitButton({ className }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={`bg-orange w-full rounded-lg py-2.5 text-xl font-medium flex items-center justify-center ${className}`}
    >
      Continue
      <ArrowRight className="ml-2" />
    </button>
  );
}
