import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface BarChartProps {
  xLabel: string;
  yLabel: string;
  title: string;
  min: number;
  max: number;
}

export default function CustomBarChart({
  xLabel,
  title,
  yLabel,
  min,
  max,
}: BarChartProps) {
  const fakeData = [7, 4, 7, 6, 2, 1, 6, 8];
  console.log(max, min);
  const data = [
    {
      name: "1",
      amount: 7,
      value: 2,
    },
    {
      name: "2",
      amount: 4,
      value: 4,
    },
    {
      name: "3",
      amount: 7,
      value: 1,
    },
    {
      name: "4",
      amount: 6,
      value: 1,
    },
    {
      name: "5",
      amount: 2,
      value: 7,
    },
    {
      name: "6",
      amount: 3,
      value: 8,
    },
  ];
  return (
    <BarChart width={400} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis tick={{ fontSize: 10 }} interval={0} dataKey="name">
        <Label position={"insideBottom"} offset={0}>
          {xLabel}
        </Label>
      </XAxis>
      <YAxis
        interval={0}
        tick={{ fontSize: 10 }}
        type="number"
        domain={[(_dataMin: number) => min, (_dataMax: number) => max]}
      >
        <Label>{yLabel}</Label>
      </YAxis>
      <Tooltip />
      <Legend />
      <Bar dataKey="amount" fill="#8884d8" />
      <Bar dataKey="value" fill="#82ca9d" />
    </BarChart>
  );
}
