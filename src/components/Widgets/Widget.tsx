import { ISubWidget } from "@/types/general";
import Image from "next/image";
import BarChart from "./BarChart";
import EntityTable from "./EntityTable";
import LineChart from "./LineChart";
import TimeSeriesChart from "./TimeSeriesChart";

interface WidgetProps {
  widget: ISubWidget;
}

export default function Widget({ widget }: WidgetProps) {
  return widget.name === "bar chart" ? (
    <div className="overflow-auto w-[400px]">
      <BarChart
        yLabel={widget.chartData?.yAxesLabel || ""}
        xLabel={widget.chartData?.xAxesLabel || ""}
        title={widget.chartData?.title || ""}
        min={(widget.chartData?.yAxesMin || 0) as number}
        max={(widget.chartData?.yAxesMax || 0) as number}
      />
    </div>
  ) : widget.name === "line chart" ? (
    <div className="overflow-auto w-[400px]" key={widget.name}>
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
    </div>
  ) : widget.name === "time series" ? (
    <div className="overflow-auto w-[400px]" key={widget.name}>
      <TimeSeriesChart
        xLabel={widget.chartData?.xAxesLabel || ""}
        title={widget.chartData?.title || ""}
        min={(widget.chartData?.yAxesMin || 0) as number}
        max={(widget.chartData?.yAxesMax || 0) as number}
      />
    </div>
  ) : widget.name === "entity table" ? (
    <div className="overflow-auto w-[400px]" key={widget.name}>
      <EntityTable data={widget.tableData} />
    </div>
  ) : (
    <div key={widget.name} className="overflow-auto w-[400px]">
      <div className=" capitalize text-sm mb-2 dark:text-white">
        {widget.name}
      </div>
      <div className="relative w-full aspect-square">
        <Image fill src={widget.image} alt="widget name" />
      </div>
    </div>
  );
}
