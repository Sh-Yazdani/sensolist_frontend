"use client";

import { removeWidgetEdit } from "@/lib/features/dashboard/dashboardSlice";
import { RootState } from "@/lib/store";
import { ISubWidget, IWidget } from "@/types/general";
import { Close } from "@mui/icons-material";
import { ArrowLeft } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  onAddWidget: (widget: ISubWidget) => void;
}

export default function DashboardWidgetSelect({
  isOpen,
  onClose,
  dashboardId,
  onAddWidget,
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

  const { widgetEdit, dashboards } = useSelector(
    (state: RootState) => state.dashboardSlice
  );

  const dispatch = useDispatch();
  console.log("dashboards", dashboards);
  console.log("widgetEdit", widgetEdit);

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
          parent: "chart",
        },
        {
          name: "line chart",
          image: "/assets/widgets/line-chart.svg",
          parent: "chart",
        },
        {
          name: "bar chart",
          image: "/assets/widgets/bar-chart.svg",
          parent: "chart",
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
          parent: "buttons",
        },
        {
          name: "power button",
          image: "/assets/widgets/power-button.svg",
          parent: "buttons",
        },
        {
          name: "toggle button",
          image: "/assets/widgets/toggle-button.svg",
          parent: "buttons",
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
          parent: "count",
        },
        {
          name: "entity count",
          image: "/assets/widgets/entity-count.png",
          parent: "count",
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
          parent: "guage",
        },
        {
          name: "vertical bar",
          image: "/assets/widgets/vertical-bar.png",
          parent: "guage",
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
          parent: "map",
        },
        {
          name: "open map",
          image: "/assets/widgets/open-map.png",
          parent: "map",
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
          parent: "table",
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
          parent: "card",
        },
        {
          name: "progress bar",
          image: "/assets/widgets/progress-bar.svg",
          parent: "card",
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
          parent: "indoor environment",
        },
        {
          name: "indoor temprature chart",
          image: "/assets/widgets/temprature-chart.png",
          parent: "indoor environment",
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
          parent: "outdoor environment",
        },
        {
          name: "outdoor temprature chart",
          image: "/assets/widgets/temprature-chart.png",
          parent: "outdoor environment",
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
          parent: "air quality",
        },
        {
          name: "air quality chart card",
          image: "/assets/widgets/air-quality-chart.png",
          parent: "air quality",
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
          parent: "video streaming",
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
        onAddWidget={(wdg: ISubWidget) => {
          onAddWidget(wdg);
        }}
        dashboardId={dashboardId}
        onWidgetsClose={onClose}
        chart={chartModalOpen}
        open={!!chartModalOpen || widgetEdit?.widget.parent === "chart"}
        onClose={() => {
          if (widgetEdit) {
            dispatch(removeWidgetEdit());
          } else {
            setChartModalOpen(null);
          }
        }}
        edit={widgetEdit}
      />
      <AirQualityFormModal
        onAddWidget={(wdg: ISubWidget) => {
          onAddWidget(wdg);
        }}
        dashboardId={dashboardId}
        onWidgetsClose={onClose}
        card={airQualityModalOpen}
        open={
          !!airQualityModalOpen || widgetEdit?.widget.parent === "air quality"
        }
        onClose={() => {
          if (widgetEdit) {
            dispatch(removeWidgetEdit());
          } else {
            setAirQualityModalOpen(null);
          }
        }}
      />
      <IndoorEnvironmentFormModal
        onAddWidget={(wdg: ISubWidget) => {
          onAddWidget(wdg);
        }}
        dashboardId={dashboardId}
        onWidgetsClose={onClose}
        card={indoorEnvironmentModalOpen}
        open={
          !!indoorEnvironmentModalOpen ||
          widgetEdit?.widget.parent === "indoor environment"
        }
        onClose={() => {
          if (widgetEdit) {
            dispatch(removeWidgetEdit());
          } else {
            setIndoorEnvironmentModalOpen(null);
          }
        }}
        edit={widgetEdit}
      />
      <OutdoorEnvironmentFormModal
        onAddWidget={(wdg: ISubWidget) => {
          onAddWidget(wdg);
        }}
        dashboardId={dashboardId}
        onWidgetsClose={onClose}
        card={outdoorEnvironmentModalOpen}
        open={
          !!outdoorEnvironmentModalOpen ||
          widgetEdit?.widget.parent === "outdoor environment"
        }
        onClose={() => {
          setOutdoorEnvironmentModalOpen(null);
        }}
        edit={widgetEdit}
      />
      <TableFormModal
        onAddWidget={(wdg: ISubWidget) => {
          onAddWidget(wdg);
        }}
        dashboardId={dashboardId}
        onWidgetsClose={onClose}
        table={tableModalOpen}
        open={!!tableModalOpen || widgetEdit?.widget.parent === "table"}
        onClose={() => {
          if (widgetEdit) {
            dispatch(removeWidgetEdit());
          } else {
            setTableModalOpen(null);
          }
        }}
        edit={widgetEdit}
      />
      <GuageFormModal
        onAddWidget={() => {
          if (guageModalOpen) {
            onAddWidget(guageModalOpen);
          }
          onClose();
        }}
        chart={guageModalOpen}
        open={!!guageModalOpen || widgetEdit?.widget.parent === ""}
        onClose={() => {
          if (widgetEdit) {
            dispatch(removeWidgetEdit());
          } else {
            setGuageModalOpen(null);
          }
        }}
        edit={widgetEdit}
      />
      <CardFormModal
        onAddWidget={() => {
          if (cardModalOpen) {
            onAddWidget(cardModalOpen);
          }
          onClose();
        }}
        chart={cardModalOpen}
        open={!!cardModalOpen || widgetEdit?.widget.parent === ""}
        onClose={() => {
          if (widgetEdit) {
            dispatch(removeWidgetEdit());
          } else {
            setCardModalOpen(null);
          }
        }}
        edit={widgetEdit}
      />
      <AlarmCountFormModal
        onAddWidget={() => {
          if (alarmCountModalOpen) {
            onAddWidget(alarmCountModalOpen);
          }
          onClose();
        }}
        chart={alarmCountModalOpen}
        open={!!alarmCountModalOpen || widgetEdit?.widget.parent === ""}
        onClose={() => {
          if (widgetEdit) {
            dispatch(removeWidgetEdit());
          } else {
            setAlarmCountModalOpen(null);
          }
        }}
        edit={widgetEdit}
      />
    </>
  );
}
