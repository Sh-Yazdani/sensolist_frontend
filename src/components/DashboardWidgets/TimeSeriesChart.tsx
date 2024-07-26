interface TimeSeriesChartProps {
  xLabel: string;
  title: string;
  min: number;
  max: number;
}
export default function TimeSeriesChart({
  xLabel,
  title,
  min,
  max,
}: TimeSeriesChartProps) {
  const fakeData = [7, 4, 7, 6, 2, 1, 6, 8];

  return <div className=" w-[600px]"></div>;
}
