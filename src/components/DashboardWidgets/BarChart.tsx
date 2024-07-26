interface BarChartProps {
  xLabel: string;
  title: string;
  min: number;
  max: number;
}

export default function BarChart({ xLabel, title, min, max }: BarChartProps) {
  const fakeData = [7, 4, 7, 6, 2, 1, 6, 8];
  console.log(max);
  return <div className=" w-[600px]"></div>;
}
