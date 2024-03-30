import dayjs from "dayjs";
import { BillsIcon } from "./images/billsIcon";
import { ClothingIcon } from "./images/clothingIcon";
import { FoodIcon } from "./images/foodIcon";
import { ShoppingIcon } from "./images/shoppingIcon";
import { DeleteIcon } from "./images/deleteIcon";
import { EditIcon } from "./images/editIcon";
import styles from "@/styles/recordPage.module.css";
import axios from "axios";

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
  Bills: "#16A34A",
  Food: "#FB8A22",
  Shopping: "red",
  Clothing: "#6F6CF3",
};
const icons: IconsType = {
  Bills: <BillsIcon />,
  Food: <FoodIcon />,
  Shopping: <ShoppingIcon />,
  Clothing: <ClothingIcon />,
};

export const Transaction = ({ transaction }: { transaction: Transaction }) => {
  const day = dayjs(transaction.createdAt).format("YY-MM-DD");
  const time = dayjs(transaction.createdAt).format("hh:mm");

  const deleteTransaction = async () => {
    const id = transaction._id
    try {
      const response = await axios.delete(`http://localhost:8080/delete-transaction/${id}`  );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTransction = async () =>{
    const updated =   {
      category:'food',
      amount:900000,
      note:'uurchilluuuuu',
    }
    await axios.post(
      "http://localhost:8080/update-transaction",
    {
      id: transaction._id,
      transaction: updated
    }
    );
  }

  return (
    <div className={styles.transactionComponent}>
      <div style={{ display: "flex", gap: "20px" }}>
        <div
          className={styles.icon}
          style={{ backgroundColor: iconColors[transaction.category] }}
        >
          {icons[transaction.category]}
        </div>

        <div>
          <div>{transaction.category}</div>
          <div className={styles.transactionLeft}>
            <span style={{ color: "darkgrey" }}>{day}</span>
            <span style={{ color: "dimgray" }}>{time}</span>
            <span style={{ padding: "0 10px" }}>|</span>
            <span style={{ color: "grey" }}>{transaction.note}</span>
          </div>
        </div>
      </div>
      <div className={styles.transactionRight}>
        <div style={{ display: "flex", gap: "25px" }}>
          <div onClick={()=> deleteTransaction()}>

          <DeleteIcon />
          </div>
          <div onClick={()=> updateTransction()}>
          <EditIcon />
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
    </div>
  );
};
