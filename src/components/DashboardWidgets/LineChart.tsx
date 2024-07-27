import { CartesianGrid, Label, Line, LineChart, XAxis, YAxis } from "recharts";

interface LineChartProps {
  xLabel: string;
  yLabel: string;
  title: string;
  min: number;
  max: number;
}
export default function CustomLineChart({
  xLabel,
  yLabel,
  title,
  min,
  max,
}: LineChartProps) {
  const fakeData = [7, 4, 7, 6, 2, 1, 6, 8];
  const data = [
    {
      name: "data 1",
      amount: 7,
      value: 2,
    },
    {
      name: "data 2",
      amount: 4,
      value: 4,
    },
    {
      name: "data 3",
      amount: 7,
      value: 1,
    },
    {
      name: "data 4",
      amount: 6,
      value: 1,
    },
    {
      name: "data 5",
      amount: 2,
      value: 7,
    },
    {
      name: "data 6",
      amount: 3,
      value: 8,
    },
  ];
  return (
    <LineChart width={400} height={200} data={data}>
      <Line strokeWidth={3} type="monotone" dataKey="amount" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name">
        <Label position={"insideBottom"} offset={-5}>
          {xLabel}
        </Label>
      </XAxis>
      <YAxis
        type="number"
        domain={[(_dataMin: number) => min, (_dataMax: number) => max]}
      >
        <Label>{yLabel}</Label>
      </YAxis>
    </LineChart>
  );
}
