interface ButtonProps {
  variant?: "fill" | "stroke" | "text";
  className?: string;
  children: React.ReactNode;
}

export default function Button({ variant, className, children }: ButtonProps) {
  return (
    <button
      className={`rounded-lg py-3 capitalize flex items-center text-sm justify-center ${
        variant === "text"
          ? ""
          : variant === "stroke"
          ? ""
          : " text-white bg-secondary-main hover:shadow-orange"
      } ${className}`}
    >
      {children}
    </button>
  );
}
