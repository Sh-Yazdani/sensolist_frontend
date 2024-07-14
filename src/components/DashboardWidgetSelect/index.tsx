import { Close } from "@mui/icons-material";

interface DashboardWidgetSelectProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DashboardWidgetSelect({
  isOpen,
  onClose,
}: DashboardWidgetSelectProps) {
  return (
    <div
      className={` absolute w-3/4 h-full bg-neutral-2 shadow right-[-1rem] bottom-0
        flex flex-col
          transition-all duration-500 ${!isOpen && "translate-x-[120%]"}`}
    >
      <div className=" bg-primary-tint-3 h-16 flex items-center px-4">
        <div className=" text-white font-semibold">Select Widgets Bundle</div>
        <button onClick={onClose} className="ml-auto">
          <Close className=" text-white" />
        </button>
      </div>
    </div>
  );
}
