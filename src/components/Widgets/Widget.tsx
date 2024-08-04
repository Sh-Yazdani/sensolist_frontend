"use client";

import { addWidgetEdit } from "@/lib/features/dashboard/dashboardSlice";
import { ISubWidget } from "@/types/general";
import Image from "next/image";
import { useDispatch } from "react-redux";
import BarChart from "./BarChart";
import EntityTable from "./EntityTable";
import LineChart from "./LineChart";
import TimeSeriesChart from "./TimeSeriesChart";
import WidgetCardContainer from "./WidgetCardContainer";

interface WidgetProps {
  widget: ISubWidget;
  editMode: boolean;
  dashboardId: number;
  saved: boolean;
}

export default function Widget({
  widget,
  editMode,
  dashboardId,
  saved,
}: WidgetProps) {
  const dispatch = useDispatch();
  return (
    <WidgetCardContainer
      onEditSelect={() => {
        dispatch(
          addWidgetEdit({
            dashboardId: dashboardId,
            widget: widget,
            draft: !saved,
          })
        );
      }}
      widget={widget}
      editMode={editMode}
      dashboardId={dashboardId}
    >
      {widget.name === "bar chart" ? (
        <>
          <BarChart
            yLabel={widget.chartData?.yAxesLabel || ""}
            xLabel={widget.chartData?.xAxesLabel || ""}
            title={widget.chartData?.title || ""}
            min={(widget.chartData?.yAxesMin || 0) as number}
            max={(widget.chartData?.yAxesMax || 0) as number}
          />
        </>
      ) : widget.name === "line chart" ? (
        <>
          <LineChart
            // key={widget.name}
            xLabel={widget.chartData?.xAxesLabel || ""}
            yLabel={widget.chartData?.yAxesLabel || ""}
            title={widget.chartData?.title || ""}
            min={
              (widget.chartData?.yAxesMin || 0) < 0
                ? 0
                : widget.chartData?.yAxesMin || 0
            }
            max={widget.chartData?.yAxesMax || 0}
          />
        </>
      ) : widget.name === "time series" ? (
        <>
          <TimeSeriesChart
            xLabel={widget.chartData?.xAxesLabel || ""}
            title={widget.chartData?.title || ""}
            min={(widget.chartData?.yAxesMin || 0) as number}
            max={(widget.chartData?.yAxesMax || 0) as number}
          />
        </>
      ) : widget.name === "entity table" ? (
        <>
          <EntityTable data={widget.tableData} />
        </>
      ) : (
        <>
          <div className=" capitalize text-sm mb-2 dark:text-white">
            {widget.name}
          </div>
          <div className="relative w-full aspect-square">
            <Image fill src={widget.image} alt="widget name" />
          </div>
        </>
      )}
    </WidgetCardContainer>
  );
}
