import { BillsIcon } from "./images/billsIcon";
import { ClothingIcon } from "./images/clothingIcon";
import { FoodIcon } from "./images/foodIcon";
import { ShoppingIcon } from "./images/shoppingIcon";

export type Transaction = {
  amount: number;
  category: string;
  createdAt: Date | string;
  note: string;
  transactionTitle: string;
  transactionType: string;
  userId: string;
  __v: number;
  _id: string;
};

interface ColorMap {
  [key: string]: string;
}

type IconsType = {
  bills: JSX.Element;
  food: JSX.Element;
  shopping: JSX.Element;
  clothing: JSX.Element;
  [x: string]: JSX.Element;
};

const amountColors: ColorMap = {
  income: "#16A34A",
  expense: "#FF0101",
};
const incomeExpense: ColorMap = {
  income: "",
  expense: "-",
};
const iconColors: ColorMap = {
    bills: "#16A34A",
  food: "#FB8A22",
  shopping: "red",
  clothing: "#6F6CF3",
};
const icons: IconsType = {
  bills: <BillsIcon />,
  food: <FoodIcon />,
  shopping: <ShoppingIcon />,
  clothing: <ClothingIcon />,
};

export const Transaction = ({ transaction }: { transaction: Transaction }) => {
  const date = new Date(transaction.createdAt);
  const hour = date.getHours();
  const min = date.getMinutes();

  return (
    <div
      style={{
        width: "60vw",
        height: "64px",
        backgroundColor: "#ffffff",
        border: "1px solid rgba(229, 231, 235, 0.8)",
        borderRadius: "12px",
        padding: "12px 23px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <div
          style={{
            borderRadius: "50%",
            backgroundColor: iconColors[transaction.category],
            width: "37px",
            height: "37px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icons[transaction.category]}
        </div>

        <div>
          <div>{transaction.category}</div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              fontSize: "14px",
              lineHeight: "22px",
            }}
          >
            <span style={{ color: "grey" }}>
              {hour}:{min}
            </span>
            <span>|</span>
            <span style={{ color: "grey" }}>{transaction.note}</span>
          </div>
        </div>
      </div>
      <p
        style={{
          lineHeight: "8px",
          color: amountColors[transaction.transactionType],
        }}
      >
        {incomeExpense[transaction.transactionType]} {transaction.amount}₮
      </p>
    </div>
  );
};
