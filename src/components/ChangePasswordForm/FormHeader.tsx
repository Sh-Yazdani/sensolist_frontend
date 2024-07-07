interface FormHeaderProps {
  title: string;
  description: string;
}

export default function FormHeader({ title, description }: FormHeaderProps) {
  return (
    <div className="mt-6">
      <div className=" border-b border-neutral-3 pb-2 capitalize">{title}</div>
      <div className=" text-neutral-7 text-sm mt-2">{description}</div>
    </div>
  );
}
