import style from "../styles/lastRecord.module.css";
import { ListItem } from "./ListItem";
import { useRouter } from "next/router";
import { Transaction } from "./transactionComponent";

export default function LastRecords({transaction}:{transaction: Transaction[]}) {
  const router = useRouter();


  return (
    <div className={style.lastRecord} onClick={() => router.push("/records")}>
      <div className={style.head}>Last Records</div>
      <div className={style.container}>
        {transaction.map((transaction, index) => (
          <ListItem key={index} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}
