"use client";

import { addWidgetEdit } from "@/lib/features/dashboard/dashboardSlice";
import { ISubWidget, IWidgetData } from "@/types/general";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import BarChart from "./BarChart";
import EntityTable from "./EntityTable";
import HumidityCard from "./HumidityCard";
import IndoorCo2 from "./IndoorCo2";
import IndoorHumidityCard from "./IndoorHumidityCard";
import IndoorPm25 from "./IndoorPm25";
import IndoorPressureCard from "./IndoorPressureCard";
import IndoorTemprature from "./IndoorTemprature";
import LineChart from "./LineChart";
import NoiseLevel from "./NoiseLevel";
import OutdoorCo2 from "./OutdoorCo2";
import OutdoorPm25 from "./OutdoorPm25";
import OutdoorTemprature from "./OutdoorTemprature";
import PressureCard from "./PressureCard";
import TimeSeriesChart from "./TimeSeriesChart";
import WidgetCardContainer from "./WidgetCardContainer";

interface WidgetProps {
  widget: ISubWidget;
  editMode: boolean;
  dashboardId: number;
  saved: boolean;
  index: number;
}

export default function Widget({
  widget,
  editMode,
  dashboardId,
  saved,
  index,
}: WidgetProps) {
  const dispatch = useDispatch();

  const [airQualityData, setAirQualityData] = useState<IWidgetData>();

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await getWidgetData(
  //       widget.airQualityData?.senderId || "",
  //       widget.airQualityData?.charactristic || []
  //     );
  //     setAirQualityData(response);
  //   };
  //   getData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <WidgetCardContainer
      onEditSelect={() => {
        dispatch(
          addWidgetEdit({
            dashboardId: dashboardId,
            widget: widget,
            draft: !saved,
            index: index,
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
      ) : widget.name === "indoor temprature card" ? (
        <IndoorTemprature
          name={widget.name}
          data={widget.indoorEnvironmentData}
        />
      ) : widget.name === "outdoor temprature card" ? (
        <OutdoorTemprature
          name={widget.name}
          data={widget.indoorEnvironmentData}
        />
      ) : widget.name === "Noise level card" ? (
        <NoiseLevel name={widget.name} data={widget.indoorEnvironmentData} />
      ) : widget.name === "Indoor CO2 card" ? (
        <IndoorCo2 name={widget.name} data={widget.indoorEnvironmentData} />
      ) : widget.name === "Indoor PM2.5 card" ? (
        <IndoorPm25 name={widget.name} data={widget.indoorEnvironmentData} />
      ) : widget.name === "Humidity card" ? (
        <HumidityCard name={widget.name} data={widget.outdoorEnvironmentData} />
      ) : widget.name === "Pressure card" ? (
        <PressureCard name={widget.name} data={widget.outdoorEnvironmentData} />
      ) : widget.name === "Outdoor CO2 card" ? (
        <OutdoorCo2 name={widget.name} data={widget.indoorEnvironmentData} />
      ) : widget.name === "Outdoor PM2.5 card" ? (
        <OutdoorPm25 name={widget.name} data={widget.indoorEnvironmentData} />
      ) : widget.name === "Indoor Humidity card" ? (
        <IndoorHumidityCard
          name={widget.name}
          data={widget.outdoorEnvironmentData}
        />
      ) : widget.name === "Indoor Pressure card" ? (
        <IndoorPressureCard
          name={widget.name}
          data={widget.outdoorEnvironmentData}
        />
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
