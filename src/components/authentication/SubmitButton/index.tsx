interface SubmitButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function SubmitButton({
  className,
  children,
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={`bg-orange w-full rounded-lg py-2.5 text-xl font-medium flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
}
