interface SubmitButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function SubmitButton({
  className,
  children,
  disabled,
}: SubmitButtonProps) {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`bg-orange w-full rounded-lg py-2.5 text-xl 
      font-medium flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
}
