import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const categories = ["Bills", "Food", "Shopping", "Insurance", "Clothing"];
const expenses = [300, 50, 100, 200, 150];
const colors = ["#1C64F2", "#E74694", "#FDBA8C", `#16BDCA`, `#F2901C`];

const sum = expenses.reduce((a, b) => a + b, 0);

const dataSet = {
  labels: categories,
  datasets: [
    {
      data: expenses,
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

function DoughnutChart() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "41vw",
        height: "284px",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          height:"56px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          borderBottom: "1px solid rgba(226, 232, 240, 1)",
        }}
      >
        <p>Expenses</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <p>Total: {sum}₮</p>
          <p style={{ color: "rgba(107, 114, 128, 1)" }}>Jun 1 - Nov 30</p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "41vw",
            height: "20vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft:"1vw"
          }}
        >
          <Doughnut
            data={dataSet}
            options={options}
            style={{ maxHeight: "180px", maxWidth: "180px" }}
          />
        </div>
        <Labels />
      </div>
    </div>
  );
}

const Labels = () => {
  return (
    <div>
      {categories.map((category, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", height: "40px" }}
        >
          <div
            style={{ display: "flex", alignItems: "center", width: "150px" }}
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
            <p style={{ marginRight: "10px" }}>{category}</p>
          </div>
          <div style={{ width: "9vw" }}>{expenses[index]}₮</div>
          <div style={{ width: "9vw" }}>{(expenses[index] * 100) / sum}%</div>
        </div>
      ))}
    </div>
  );
};

export default DoughnutChart;
