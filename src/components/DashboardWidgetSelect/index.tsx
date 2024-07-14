import { Close } from "@mui/icons-material";
import Image from "next/image";

interface DashboardWidgetSelectProps {
  isOpen: boolean;
  onClose: () => void;
}

const widgets = [
  {
    name: "chart",
    image: "/assets/widgets/chart.svg",
  },
  {
    name: "buttons",
    image: "/assets/widgets/buttons.svg",
  },
  {
    name: "count",
    image: "/assets/widgets/count.png",
  },
  {
    name: "guage",
    image: "/assets/widgets/guage.png",
  },
  {
    name: "map",
    image: "/assets/widgets/map.png",
  },
  {
    name: "table",
    image: "/assets/widgets/table.png",
  },
];

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
      <div className=" flex flex-wrap gap-2 pl-2 pt-4">
        {widgets.map((wdg) => (
          <div
            key={wdg.name}
            className=" bg-white shadow-lg flex flex-col w-[calc(25%-8px)] p-4 hover:shadow-neutral-6 cursor-pointer"
          >
            <div className=" capitalize text-sm mb-2">{wdg.name}</div>
            <div className="relative w-full aspect-square">
              <Image fill src={wdg.image} alt="widget name" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
