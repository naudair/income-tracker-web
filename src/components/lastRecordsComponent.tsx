import axios from "axios";
import style from "../styles/LastRecord.module.css";
import { useEffect, useState } from "react";
import {ListItem} from "./listItemComponents";

export default function LastRecords() {
  const [transaction, setTransaction] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8080/get-transaction");
      setTransaction(response.data);
    };
    fetchData();
  }, []);

  // console.log(transaction);
  return (
    <div className={style.lastRecord}>
      <div className={style.head}>Last Records</div>
      <div className={style.container}>
        {transaction.map((transaction, index) => (
          <ListItem key={index} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}
