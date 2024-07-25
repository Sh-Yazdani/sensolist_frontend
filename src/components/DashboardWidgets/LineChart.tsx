import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

interface LineChartProps {
  xLabel: string;
  title: string;
  min: number;
  max: number;
}

Chart.register(CategoryScale);

export default function LineChart({ xLabel, title, min, max }: LineChartProps) {
  const fakeData = [7, 4, 7, 6, 2, 1, 6, 8];
  return (
    <Line
      options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: title,
          },
        },
        scales: {
          y: {
            min: min,
            max: max,
          },
        },
      }}
      data={{
        labels: fakeData.map((_data, i) => `data${i}`),
        datasets: [
          {
            label: xLabel,
            data: fakeData,
          },
        ],
      }}
    />
  );
}
