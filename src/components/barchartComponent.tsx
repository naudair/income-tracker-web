import style from "../styles/barchart.module.css";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarchartProps {}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderRadius: number;
  }[];
}

const Barchart: React.FC<BarchartProps> = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data: ChartData = {
    labels,
    datasets: [
      {
        label: "Income",
        data: labels.map(() => {
          return Math.random() * 3000000;
        }),
        backgroundColor: "#84CC16",
        borderRadius: 30,
      },
      {
        label: "Expense",
        data: labels.map(() => {
          return Math.random() * 3000000;
        }),
        backgroundColor: "#F97316",
        borderRadius: 30,
      },
    ],
  };

  return (
    <div className={style.container}>
      <div className={style.head}>Income - Expense</div>
      <div className={style.chart}>
        <Bar
          data={data}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
};
export default Barchart;
