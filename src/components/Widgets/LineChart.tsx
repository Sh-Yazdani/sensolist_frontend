import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

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
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <Line
          strokeWidth={3}
          type="monotone"
          dataKey="amount"
          stroke="#8884d8"
        />
        <CartesianGrid stroke="#ccc" />
        <XAxis tick={{ fontSize: 10 }} interval={0} dataKey="name">
          <Label position={"insideBottom"} offset={-5}>
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
      </LineChart>
    </ResponsiveContainer>
  );
}
