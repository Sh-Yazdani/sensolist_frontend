import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface BarChartProps {
  xLabel: string;
  title: string;
  min: number;
  max: number;
}

export default function CustomBarChart({
  xLabel,
  title,
  min,
  max,
}: BarChartProps) {
  const fakeData = [7, 4, 7, 6, 2, 1, 6, 8];
  console.log(max, min);
  const data = [
    {
      name: xLabel,
      amount: 7,
      value: 2,
    },
    {
      name: xLabel,
      amount: 4,
      value: 4,
    },
    {
      name: xLabel,
      amount: 7,
      value: 1,
    },
    {
      name: xLabel,
      amount: 6,
      value: 1,
    },
    {
      name: xLabel,
      amount: 2,
      value: 7,
    },
    {
      name: xLabel,
      amount: 3,
      value: 8,
    },
  ];
  return (
    <BarChart width={400} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis
        type="number"
        domain={[(_dataMin: number) => min, (_dataMax: number) => max]}
      />
      <Tooltip />
      <Legend />
      <Bar dataKey="amount" fill="#8884d8" />
      <Bar dataKey="value" fill="#82ca9d" />
    </BarChart>
  );
}
