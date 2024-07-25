import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

interface BarChartProps {
  xLabel: string;
  title: string;
  min: number;
  max: number;
}

Chart.register(CategoryScale);

export default function BarChart({ xLabel, title, min, max }: BarChartProps) {
  const fakeData = [7, 4, 7, 6, 2, 1, 6, 8];

  return (
    <div className=" w-[600px]">
      <Bar
        className="h-full"
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
              data: fakeData.map((data) => data.toFixed(0)),
            },
          ],
        }}
      />
    </div>
  );
}
