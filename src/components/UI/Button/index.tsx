interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "fill" | "stroke" | "text" | "secondary";
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg py-3 capitalize flex items-center text-sm justify-center ${
        variant === "text"
          ? ""
          : variant === "stroke"
          ? ""
          : variant === "secondary"
          ? " border-2 border-neutral-6 text-neutral-6"
          : " text-white bg-secondary-main shadow-orange"
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
