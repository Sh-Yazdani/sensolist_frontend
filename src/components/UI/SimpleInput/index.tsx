"use client";

interface SimpleInputProps {
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

export default function SimpleInput({
  value,
  onChange,
  className,
}: SimpleInputProps) {
  return (
    <input
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      }}
      className={` border border-neutral-6 rounded-lg py-3 px-4 mt-2 text-sm backdrop-blur-[30px] bg-transparent
    placeholder:text-neutral-6 placeholder:text-sm focus-visible:outline-none dark:text-neutral-2 ${className}`}
    />
  );
}
