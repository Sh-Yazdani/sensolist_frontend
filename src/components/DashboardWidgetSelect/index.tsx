"use client";

import { IWidget } from "@/types/general";
import { Close } from "@mui/icons-material";
import { ArrowLeft } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";

interface DashboardWidgetSelectProps {
  isOpen: boolean;
  onClose: () => void;
}

const widgets: IWidget[] = [
  {
    name: "chart",
    image: "/assets/widgets/chart.svg",
    subWidget: [
      {
        name: "time series",
        image: "/assets/widgets/time-series.svg",
      },
      {
        name: "line chart",
        image: "/assets/widgets/line-chart.svg",
      },
      {
        name: "bar chart",
        image: "/assets/widgets/bar-chart.svg",
      },
    ],
  },
  {
    name: "buttons",
    image: "/assets/widgets/buttons.svg",
    subWidget: [
      {
        name: "action button",
        image: "/assets/widgets/action-button.svg",
      },
      {
        name: "power button",
        image: "/assets/widgets/power-button.svg",
      },
      {
        name: "toggle button",
        image: "/assets/widgets/toggle-button.svg",
      },
    ],
  },
  {
    name: "count",
    image: "/assets/widgets/count.png",
    subWidget: [
      {
        name: "alarm count",
        image: "/assets/widgets/alarm-count.png",
      },
      {
        name: "entity count",
        image: "/assets/widgets/entity-count.png",
      },
    ],
  },
  {
    name: "guage",
    image: "/assets/widgets/guage.png",
    subWidget: [
      {
        name: "simple guage",
        image: "/assets/widgets/simple-guage.png",
      },
      {
        name: "vertical bar",
        image: "/assets/widgets/vertical-bar.png",
      },
    ],
  },
  {
    name: "map",
    image: "/assets/widgets/map.png",
    subWidget: [
      {
        name: "google map",
        image: "/assets/widgets/google-map.png",
      },
      {
        name: "open map",
        image: "/assets/widgets/open-map.png",
      },
    ],
  },
  {
    name: "table",
    image: "/assets/widgets/table.png",
    subWidget: [
      {
        name: "entity table",
        image: "/assets/widgets/entity-table.png",
      },
      {
        name: "alarm table",
        image: "/assets/widgets/alarm-table.png",
      },
    ],
  },
];

export default function DashboardWidgetSelect({
  isOpen,
  onClose,
}: DashboardWidgetSelectProps) {
  const [selectedWidget, setSelectedWidget] = useState<IWidget | null>(null);
  return (
    <div
      className={` absolute w-3/4 h-full bg-neutral-2 dark:bg-primary-Shade-1 shadow right-[-1rem] bottom-0
        flex flex-col overflow-auto
          transition-all duration-500 ${!isOpen && "translate-x-[120%]"}`}
    >
      <div className=" bg-primary-tint-3 h-16 flex items-center p-4">
        {selectedWidget ? (
          <div className=" text-white font-semibold flex items-center">
            <button onClick={() => setSelectedWidget(null)}>
              <ArrowLeft className="mr-2" />
            </button>
            <span className=" capitalize">{selectedWidget.name}:</span>
            <span className="ml-1">Select Widget</span>
          </div>
        ) : (
          <div className=" text-white font-semibold">Select Widgets Bundle</div>
        )}
        <button onClick={onClose} className="ml-auto">
          <Close className=" text-white mr-4" />
        </button>
      </div>
      <div className=" flex flex-wrap gap-2 pl-2 pt-4">
        {selectedWidget
          ? selectedWidget.subWidget?.map((sub) => (
              <div
                className=" bg-white dark:bg-primary-Shade-2 shadow-lg flex flex-col w-[calc(100%-8px)] md:w-[calc(33%-8px)] lg:w-[calc(25%-8px)] p-4 hover:shadow-neutral-6 cursor-pointer"
                key={sub.name}
              >
                <div className=" capitalize text-sm mb-2 dark:text-white">
                  {sub.name}
                </div>
                <div className="relative w-full aspect-square">
                  <Image fill src={sub.image} alt="widget name" />
                </div>
              </div>
            ))
          : widgets.map((wdg) => (
              <div
                onClick={() => {
                  setSelectedWidget(wdg);
                }}
                key={wdg.name}
                className=" bg-white dark:bg-primary-Shade-2 shadow-lg flex flex-col w-[calc(100%-8px)] md:w-[calc(33%-8px)] lg:w-[calc(25%-8px)] p-4 hover:shadow-neutral-6 cursor-pointer"
              >
                <div className=" capitalize text-sm mb-2 dark:text-white">
                  {wdg.name}
                </div>
                <div className="relative w-full aspect-square">
                  <Image fill src={wdg.image} alt="widget name" />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
