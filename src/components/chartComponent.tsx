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

function Chart() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "588px",
        height: "284px",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <p>Expenses</p>
        <div style={{display:"flex", gap:"20px"}}>
          <p>Total: {sum}₮</p>
          <p style={{color:"rgba(107, 114, 128, 1)"}}>Jun 1 - Nov 30</p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#F5F5F5",
          height: "2px",
          margin: "0 0 15px 0",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "228px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
          <div style={{ width: "100px" }}>{expenses[index]}₮</div>
          <div style={{ width: "100px" }}>{(expenses[index] * 100) / sum}%</div>
        </div>
      ))}
    </div>
  );
};

export default Chart;
