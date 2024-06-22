interface FormHeaderProps {
  title: string;
  description: string;
}

export default function FormHeader({ title, description }: FormHeaderProps) {
  return (
    <div className="flex flex-col w-full">
      <div
        className="w-full border-b border-white-opacity-900 pb-2 md:pb-3 
      text-[32px] md:text-5xl font-medium"
      >
        {title}
      </div>
      <div className="mt-2 text-xl md:text-[32px] md:mt-3 leading-tight">
        {description}
      </div>
    </div>
  );
}
