import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

interface LineChartProps {
  xLabel: string;
  title: string;
  min: number;
  max: number;
}
export default function CustomLineChart({
  xLabel,
  title,
  min,
  max,
}: LineChartProps) {
  const fakeData = [7, 4, 7, 6, 2, 1, 6, 8];
  const data = [
    {
      name: xLabel,
      amount: 7,
    },
    {
      name: xLabel,
      amount: 4,
    },
    {
      name: xLabel,
      amount: 7,
    },
    {
      name: xLabel,
      amount: 6,
    },
    {
      name: xLabel,
      amount: 2,
    },
    {
      name: xLabel,
      amount: 3,
    },
  ];
  return (
    <LineChart width={400} height={200} data={data}>
      <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis
        type="number"
        domain={[(_dataMin: number) => min, (_dataMax: number) => max]}
      />
    </LineChart>
  );
}
