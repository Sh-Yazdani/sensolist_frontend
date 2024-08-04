"use client";

import { addWidget } from "@/lib/features/dashboard/dashboardSlice";
import { IWidget } from "@/types/general";
import { Close } from "@mui/icons-material";
import { ArrowLeft } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import AirQualityFormModal from "./AirQualityFormModal";
import AlarmCountFormModal from "./AlarmCountFormModal";
import CardFormModal from "./CardFormModal";
import ChartFormModal from "./ChartFormModal";
import GuageFormModal from "./GuageFormModal";
import IndoorEnvironmentFormModal from "./IndoorEnvironmentFormModal";
import OutdoorEnvironmentFormModal from "./OutdoorEnvironmentFormModal";
import TableFormModal from "./TableFormModal";

interface DashboardWidgetSelectProps {
  isOpen: boolean;
  onClose: () => void;
  dashboardId: number;
}

export default function DashboardWidgetSelect({
  isOpen,
  onClose,
  dashboardId,
}: DashboardWidgetSelectProps) {
  const [selectedWidget, setSelectedWidget] = useState<IWidget | null>(null);
  const [chartModalOpen, setChartModalOpen] = useState<{
    name: string;
    image: string;
  } | null>(null);

  const [guageModalOpen, setGuageModalOpen] = useState<{
    name: string;
    image: string;
  } | null>(null);

  const [tableModalOpen, setTableModalOpen] = useState<{
    name: string;
    image: string;
  } | null>(null);

  const [cardModalOpen, setCardModalOpen] = useState<{
    name: string;
    image: string;
  } | null>(null);

  const [alarmCountModalOpen, setAlarmCountModalOpen] = useState<{
    name: string;
    image: string;
  } | null>(null);

  const [airQualityModalOpen, setAirQualityModalOpen] = useState<{
    name: string;
    image: string;
  } | null>(null);

  const [indoorEnvironmentModalOpen, setIndoorEnvironmentModalOpen] = useState<{
    name: string;
    image: string;
  } | null>(null);

  const [outdoorEnvironmentModalOpen, setOutdoorEnvironmentModalOpen] =
    useState<{
      name: string;
      image: string;
    } | null>(null);

  const dispatch = useDispatch();

  const widgets: IWidget[] = [
    {
      name: "chart",
      image: "/assets/widgets/chart.svg",
      onSelect: (sub: { name: string; image: string }) => {
        setChartModalOpen(sub);
      },
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
      onSelect: (sub: { name: string; image: string }) => {
        setAlarmCountModalOpen(sub);
      },
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
      onSelect: (sub: { name: string; image: string }) => {
        setGuageModalOpen(sub);
      },
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

      onSelect: (sub: { name: string; image: string }) => {
        setTableModalOpen(sub);
      },
      subWidget: [
        {
          name: "entity table",
          image: "/assets/widgets/entity-table.png",
        },
        // {
        //   name: "alarm table",
        //   image: "/assets/widgets/alarm-table.png",
        // },
      ],
    },
    {
      name: "card",
      image: "/assets/widgets/card.png",
      onSelect: (sub: { name: string; image: string }) => {
        setCardModalOpen(sub);
      },
      subWidget: [
        {
          name: "value card",
          image: "/assets/widgets/value-card.png",
        },
        {
          name: "progress bar",
          image: "/assets/widgets/progress-bar.svg",
        },
      ],
    },
    {
      name: "indoor environment",
      image: "/assets/widgets/indoor.png",
      onSelect: (sub: { name: string; image: string }) => {
        setIndoorEnvironmentModalOpen(sub);
      },
      subWidget: [
        {
          name: "indoor temprature card",
          image: "/assets/widgets/indoor-temprature.png",
        },
        {
          name: "indoor temprature chart",
          image: "/assets/widgets/temprature-chart.png",
        },
      ],
    },
    {
      name: "outdoor environment",
      image: "/assets/widgets/outdoor.png",
      onSelect: (sub: { name: string; image: string }) => {
        setOutdoorEnvironmentModalOpen(sub);
      },
      subWidget: [
        {
          name: "outdoor temprature card",
          image: "/assets/widgets/indoor-temprature.png",
        },
        {
          name: "outdoor temprature chart",
          image: "/assets/widgets/temprature-chart.png",
        },
      ],
    },
    {
      name: "air quality",
      image: "/assets/widgets/air-quality.svg",
      onSelect: (sub: { name: string; image: string }) => {
        setAirQualityModalOpen(sub);
      },
      subWidget: [
        {
          name: "air quality card",
          image: "/assets/widgets/air-quality-index.png",
        },
        {
          name: "air quality chart card",
          image: "/assets/widgets/air-quality-chart.png",
        },
      ],
    },
    {
      name: "video streaming",
      image: "/assets/widgets/video.png",
      subWidget: [
        {
          name: "video",
          image: "/assets/widgets/video.png",
        },
      ],
    },
  ];
  return (
    <>
      <div
        className={` absolute w-3/4 h-full bg-neutral-2 dark:bg-primary-Shade-1 shadow right-[-1rem] bottom-0
        flex flex-col overflow-auto z-10
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
            <div className=" text-white font-semibold">
              Select Widgets Bundle
            </div>
          )}
          <button onClick={onClose} className="ml-auto">
            <Close className=" text-white mr-4" />
          </button>
        </div>
        <div className=" flex flex-wrap gap-2 pl-2 pt-4">
          {selectedWidget
            ? selectedWidget.subWidget?.map((sub) => (
                <div
                  onClick={() => {
                    if (selectedWidget.onSelect) {
                      selectedWidget.onSelect(sub);
                    }
                  }}
                  className=" bg-white dark:bg-primary-Shade-2 shadow flex flex-col 
                w-[calc(100%-8px)] md:w-[calc(33%-8px)] lg:w-[calc(25%-8px)] p-4 
                hover:shadow-neutral-6 cursor-pointer"
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
                  <div
                    className={`relative aspect-square ${
                      wdg.name === "video streaming"
                        ? "w-[80%] m-auto"
                        : " w-full"
                    } `}
                  >
                    <Image fill src={wdg.image} alt="widget name" />
                  </div>
                </div>
              ))}
        </div>
      </div>
      <ChartFormModal
        dashboardId={dashboardId}
        onWidgetsClose={onClose}
        chart={chartModalOpen}
        open={!!chartModalOpen}
        onClose={() => {
          setChartModalOpen(null);
        }}
      />
      <AirQualityFormModal
        dashboardId={dashboardId}
        onWidgetsClose={onClose}
        card={airQualityModalOpen}
        open={!!airQualityModalOpen}
        onClose={() => {
          setAirQualityModalOpen(null);
        }}
      />
      <IndoorEnvironmentFormModal
        dashboardId={dashboardId}
        onWidgetsClose={onClose}
        card={indoorEnvironmentModalOpen}
        open={!!indoorEnvironmentModalOpen}
        onClose={() => {
          setIndoorEnvironmentModalOpen(null);
        }}
      />
      <OutdoorEnvironmentFormModal
        dashboardId={dashboardId}
        onWidgetsClose={onClose}
        card={outdoorEnvironmentModalOpen}
        open={!!outdoorEnvironmentModalOpen}
        onClose={() => {
          setOutdoorEnvironmentModalOpen(null);
        }}
      />
      <TableFormModal
        dashboardId={dashboardId}
        onWidgetsClose={onClose}
        table={tableModalOpen}
        open={!!tableModalOpen}
        onClose={() => {
          setTableModalOpen(null);
        }}
      />
      <GuageFormModal
        onAddWidget={() => {
          if (guageModalOpen) {
            dispatch(
              addWidget({
                dashboardId: dashboardId,
                widget: guageModalOpen,
              })
            );
          }
          onClose();
        }}
        chart={guageModalOpen}
        open={!!guageModalOpen}
        onClose={() => {
          setGuageModalOpen(null);
        }}
      />
      <CardFormModal
        onAddWidget={() => {
          if (cardModalOpen) {
            dispatch(
              addWidget({
                dashboardId: dashboardId,
                widget: cardModalOpen,
              })
            );
          }
          onClose();
        }}
        chart={cardModalOpen}
        open={!!cardModalOpen}
        onClose={() => {
          setCardModalOpen(null);
        }}
      />
      <AlarmCountFormModal
        onAddWidget={() => {
          if (alarmCountModalOpen) {
            dispatch(
              addWidget({
                dashboardId: dashboardId,
                widget: alarmCountModalOpen,
              })
            );
          }
          onClose();
        }}
        chart={alarmCountModalOpen}
        open={!!alarmCountModalOpen}
        onClose={() => {
          setAlarmCountModalOpen(null);
        }}
      />
    </>
  );
}
