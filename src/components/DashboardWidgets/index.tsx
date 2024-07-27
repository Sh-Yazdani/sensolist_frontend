"use client";

import { RootState } from "@/lib/store";
import { Add } from "iconsax-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import DashboardHeader from "../DashboardHeader";
import DashboardWidgetSelect from "../DashboardWidgetSelect";
import Button from "../UI/Button";
import BarChart from "./BarChart";
import EntityTable from "./EntityTable";
import LineChart from "./LineChart";
import TimeSeriesChart from "./TimeSeriesChart";

interface DashboardWidgetsProps {
  dashboardId: number;
}

export default function DashboardWidgets({
  dashboardId,
}: DashboardWidgetsProps) {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(true);
  const { dashboards } = useSelector(
    (state: RootState) => state.dashboardSlice
  );
  const selectedDashboard = [
    ...dashboards.filter((dash) => dash.id === dashboardId),
  ][0];

  if (!selectedDashboard) {
    redirect("/dashboard");
  }

  console.log("selected dashboards", selectedDashboard);

  return (
    <div className="flex flex-col h-full flex-1 relative md:pl-5 overflow-hidden">
      <DashboardWidgetSelect
        dashboardId={dashboardId}
        onClose={() => {
          setIsSelectOpen(false);
        }}
        isOpen={isSelectOpen}
      />
      <DashboardHeader
        editMode={editMode}
        toggleEditMode={(a: boolean) => setEditMode(a)}
        isSelectOpen={isSelectOpen}
        onWidgetAdd={() => {
          setIsSelectOpen(true);
        }}
        dashboardId={dashboardId}
      />
      <div className=" m-auto w-full flex-1 p-4">
        {selectedDashboard?.widgets?.length ? (
          <div className="w-full flex flex-wrap gap-4">
            {selectedDashboard?.widgets.map((wdg) =>
              wdg.name === "bar chart" ? (
                <div className="overflow-auto" key={wdg.name}>
                  <BarChart
                    yLabel={wdg.chartData?.yAxesLabel || ""}
                    xLabel={wdg.chartData?.xAxesLabel || ""}
                    title={wdg.chartData?.title || ""}
                    min={(wdg.chartData?.yAxesMin || 0) as number}
                    max={(wdg.chartData?.yAxesMax || 0) as number}
                  />
                </div>
              ) : wdg.name === "line chart" ? (
                <div className="overflow-auto" key={wdg.name}>
                  <LineChart
                    // key={wdg.name}
                    xLabel={wdg.chartData?.xAxesLabel || ""}
                    yLabel={wdg.chartData?.yAxesLabel || ""}
                    title={wdg.chartData?.title || ""}
                    min={
                      (wdg.chartData?.yAxesMin || 0) < 0
                        ? 0
                        : wdg.chartData?.yAxesMin || 0
                    }
                    max={wdg.chartData?.yAxesMax || 0}
                  />
                </div>
              ) : wdg.name === "time series" ? (
                <div className="overflow-auto" key={wdg.name}>
                  <TimeSeriesChart
                    xLabel={wdg.chartData?.xAxesLabel || ""}
                    title={wdg.chartData?.title || ""}
                    min={(wdg.chartData?.yAxesMin || 0) as number}
                    max={(wdg.chartData?.yAxesMax || 0) as number}
                  />
                </div>
              ) : wdg.name === "entity table" ? (
                <div className="overflow-auto" key={wdg.name}>
                  <EntityTable data={wdg.tableData} />
                </div>
              ) : (
                <div
                  key={wdg.name}
                  className=" bg-white dark:bg-primary-Shade-2 shadow flex flex-col 
                w-[calc(100%-8px)] md:w-[calc(33%-8px)] lg:w-[calc(25%-8px)] p-4 
                hover:shadow-neutral-6 cursor-pointer"
                >
                  <div className=" capitalize text-sm mb-2 dark:text-white">
                    {wdg.name}
                  </div>
                  <div className="relative w-full aspect-square">
                    <Image fill src={wdg.image} alt="widget name" />
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          editMode && (
            <Button
              onClick={() => {
                setIsSelectOpen(true);
              }}
              className="px-4 m-auto mt-32"
            >
              <Add className="mr-2" /> Add widget
            </Button>
          )
        )}
      </div>
    </div>
  );
}
