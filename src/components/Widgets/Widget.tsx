import { ISubWidget } from "@/types/general";
import Image from "next/image";
import BarChart from "./BarChart";
import EntityTable from "./EntityTable";
import LineChart from "./LineChart";
import TimeSeriesChart from "./TimeSeriesChart";
import WidgetCardContainer from "./WidgetCardContainer";

interface WidgetProps {
  widget: ISubWidget;
}

export default function Widget({ widget }: WidgetProps) {
  return widget.name === "bar chart" ? (
    <WidgetCardContainer>
      <BarChart
        yLabel={widget.chartData?.yAxesLabel || ""}
        xLabel={widget.chartData?.xAxesLabel || ""}
        title={widget.chartData?.title || ""}
        min={(widget.chartData?.yAxesMin || 0) as number}
        max={(widget.chartData?.yAxesMax || 0) as number}
      />
    </WidgetCardContainer>
  ) : widget.name === "line chart" ? (
    <WidgetCardContainer key={widget.name}>
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
    </WidgetCardContainer>
  ) : widget.name === "time series" ? (
    <WidgetCardContainer key={widget.name}>
      <TimeSeriesChart
        xLabel={widget.chartData?.xAxesLabel || ""}
        title={widget.chartData?.title || ""}
        min={(widget.chartData?.yAxesMin || 0) as number}
        max={(widget.chartData?.yAxesMax || 0) as number}
      />
    </WidgetCardContainer>
  ) : widget.name === "entity table" ? (
    <WidgetCardContainer key={widget.name}>
      <EntityTable data={widget.tableData} />
    </WidgetCardContainer>
  ) : (
    <WidgetCardContainer key={widget.name}>
      <div className=" capitalize text-sm mb-2 dark:text-white">
        {widget.name}
      </div>
      <div className="relative w-full aspect-square">
        <Image fill src={widget.image} alt="widget name" />
      </div>
    </WidgetCardContainer>
  );
}
