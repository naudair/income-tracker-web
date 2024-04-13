import React, { FC } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Transaction } from "./transactionComponent";
import { colors } from "@/utils/data";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  transaction: Transaction[];
  label: string;
};

export const DoughnutChart: FC<Props> = ({ transaction, label }) => {
  const categories = transaction.map((e) => e.category);
  const amounts = transaction.map((e) => e.amount);
  const sum = transaction.reduce((acc, cur) => acc + cur.amount, 0);
  const dataSet = {
    labels: categories,
    datasets: [
      {
        data: amounts,
        backgroundColor: colors,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="doughnutContainer">
      <div className="doughnutHead">
        <p>Income - Expenses</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <h3>{label}</h3>
          <p>Total: {sum}₮</p>
          <p style={{ color: "rgba(107, 114, 128, 1)" }}>Jan 1 - April 19</p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="doughnut">
          <Doughnut
            data={dataSet}
            options={options}
            style={{ maxHeight: "180px", maxWidth: "180px" }}
          />
        </div>
        <Labels
          categories={categories}
          colors={colors}
          expenses={amounts}
          sum={sum}
        />
      </div>
    </div>
  );
};

const Labels: FC<{
  categories: string[];
  colors: string[];
  expenses: number[];
  sum: number;
}> = ({ categories, colors, expenses, sum }) => {
  return (
    <div className="label">
      {categories.map((category, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            height: "40px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", width: "100px" }}
          >
            <div
              style={{
                width: "15px",
                height: "15px",
                backgroundColor: colors[index],
                margin: "5px",
                borderRadius: "50%",
              }}
            />
            <p>{category}</p>
          </div>
          <div style={{ width: "70px" }}>{expenses[index]}₮</div>
          <div style={{ width: "35px" }}>
            {((expenses[index] * 100) / sum).toFixed()}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoughnutChart;
