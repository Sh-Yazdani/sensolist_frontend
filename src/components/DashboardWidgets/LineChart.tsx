interface LineChartProps {
  xLabel: string;
  title: string;
  min: number;
  max: number;
}
export default function LineChart({ xLabel, title, min, max }: LineChartProps) {
  const fakeData = [7, 4, 7, 6, 2, 1, 6, 8];
  return <div className=" w-[600px]"></div>;
}
