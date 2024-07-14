interface DashboardWidgetSelectProps {
  isOpen: boolean;
}

export default function DashboardWidgetSelect({
  isOpen,
}: DashboardWidgetSelectProps) {
  return (
    <div
      className={` absolute w-3/4 h-full bg-neutral-2 shadow right-[-1rem] bottom-0 ${
        !isOpen && "translate-x-full"
      }`}
    ></div>
  );
}
