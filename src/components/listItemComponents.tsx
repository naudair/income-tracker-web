import style from "../styles/LastRecord.module.css";
import { BillsIcon } from "./images/billsIcon";
import { ClothingIcon } from "./images/clothingIcon";
import { FoodIcon } from "./images/foodIcon";
import { ShoppingIcon } from "./images/shoppingIcon";

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

type IconsType = {
  Bills: JSX.Element;
  Food: JSX.Element;
  Shopping: JSX.Element;
  Clothing: JSX.Element;
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
  Food: "#FB8A22",
  Bills: "#16A34A",
  Shopping: "red",
  Clothing: "#6F6CF3",
};
const icons: IconsType = {
  Bills: <BillsIcon />,
  Food: <FoodIcon />,
  Shopping: <ShoppingIcon />,
  Clothing: <ClothingIcon />,
};

export const ListItem = ({ transaction }: { transaction: Transaction }) => {
  const date1 = new Date(transaction.createdAt);
  const date2 = new Date();

  const differenceMs = Number(date2) - Number(date1);

  const differenceHours = Math.round(differenceMs / (1000 * 60 * 60));

  return (
    <div className={style.body}>
      <div style={{ display: "flex", gap: "15px", lineHeight: "20px" }}>
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
          {transaction.category}
          <div style={{ color: "rgba(107, 114, 128, 1)", fontSize: "13px" }}>
            {differenceHours} hours ago
            <span style={{ padding: "0 10px" }}>|</span>
            <span>{transaction.note}</span>
          </div>
        </div>
      </div>
      <div style={{ color: amountColors[transaction.transactionType] }}>
        {incomeExpense[transaction.transactionType]} {transaction.amount}₮
      </div>
    </div>
  );
};
