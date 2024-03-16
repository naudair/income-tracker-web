import style from "../styles/LastRecord.module.css";
import { HouseIcon } from "./images/houseIcon";
// import { BillsIcon } from "./images/billsIcon";
// import { ClothingIcon } from "./images/clothingIcon";
// import { FoodIcon } from "./images/foodIcon";
// import { ShoppingIcon } from "./images/shoppingIcon";

type Transaction = {
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

// type IconsType = {
//   bills: JSX.Element;
//   food: JSX.Element;
//   shopping: JSX.Element;
//   clothing: JSX.Element;
// };

const amountColors: ColorMap = {
  income: "#16A34A",
  expense: "#FF0101",
};
const incomeExpense: ColorMap = {
  income: "",
  expense: "-",
};

// const iconColors: ColorMap = {
//   food: "#FB8A22",
//   bills: "#16A34A",
//   shopping: "red",
//   clothing: "#6F6CF3",
// };
// const icons: IconsType = {
//   bills: <BillsIcon />,
//   food: <FoodIcon />,
//   shopping: <ShoppingIcon />,
//   clothing: <ClothingIcon />,
// };

export const ListItem = ({ transaction }: { transaction: Transaction }) => {
  const date1 = new Date(transaction.createdAt);
  const date2 = new Date();

  const differenceMs = Number(date2) - Number(date1);

  const differenceHours = Math.round(differenceMs / (1000 * 60 * 60));

  return (
    <div className={style.body}>
      <div style={{ display: "flex", gap: "15px", lineHeight: "20px" }}>
        <HouseIcon />
        <div>
          {transaction.category}
          <div style={{ color: "rgba(107, 114, 128, 1)", fontSize: "13px" }}>
            {differenceHours} hours ago
          </div>
        </div>
      </div>
      <div style={{ color: amountColors[transaction.transactionType] }}>
      {incomeExpense[transaction.transactionType]} {transaction.amount}₮
      </div>
    </div>
  );
};
