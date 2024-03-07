import style from "../styles/LastRecord.module.css";
import { HouseIcon } from "./images/houseIcon";

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
export const ListItem = ({ transaction }: { transaction: Transaction }) => {
  const date1 = new Date(transaction.createdAt);
  const date2 = new Date();

  const differenceMs = Number(date2) - Number(date1);

  const differenceHours = Math.round(differenceMs / (1000 * 60 * 60));

  // console.log(transaction);
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
      <div style={{ color: "rgba(132, 204, 22, 1)" }}>
        {transaction.amount} ₮
      </div>
    </div>
  );
};
