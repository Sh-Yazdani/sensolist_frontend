interface WidgetCardContainerProps {
  children: React.ReactNode;
}

export default function WidgetCardContainer({
  children,
}: WidgetCardContainerProps) {
  return (
    <div className="overflow-auto w-[400px] bg-black-opacity-100 dark:bg-white-opacity-50 rounded-lg p-4">
      {children}
    </div>
  );
}
