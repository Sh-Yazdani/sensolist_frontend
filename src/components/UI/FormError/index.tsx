import { Warning2 } from "iconsax-react";

interface FormErrorProps {
  error: string;
}

export default function FormError({ error }: FormErrorProps) {
  return (
    <div
      className="rounded bg-error text-sm text-white py-1 px-2 flex items-center
absolute bottom-[-2.25rem]"
    >
      <Warning2 /> {error}
    </div>
  );
}
