import axios from "axios";
import style from "../styles/lastRecord.module.css";
import { useEffect, useState } from "react";
import {ListItem} from "./listItemComponents";
import { useRouter } from "next/router";

export default function LastRecords() {
  const router = useRouter()
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
    <div className={style.lastRecord} onClick={() => router.push("/records")} >
      <div className={style.head}>Last Records</div>
      <div className={style.container}>
        {transaction.map((transaction, index) => (
          <ListItem key={index} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}
