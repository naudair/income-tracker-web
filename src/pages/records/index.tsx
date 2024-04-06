import Head from "@/components/headComponent";
import { LeftButton } from "@/components/images/leftButton";
import { RightButton } from "@/components/images/rightButton";
import { SideBarComponent } from "@/components/sideBarComponent";
import { Transaction } from "@/components/transactionComponent";
import styles from "@/styles/recordPage.module.css";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function RecordPage() {
  const [transaction, setTransaction] = useState<Transaction[]>([]);
  const [transactionType, setTransactiontype] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://income-tracker-service-5w2z.onrender.com/get-transaction");
      setTransaction(response.data);
    };
    fetchData();
  }, []);

  const todaysdata = transaction.filter((t) =>
    dayjs(t.createdAt).isSame(dayjs(), "day")
  );
  const notTodaysdata = transaction.filter(
    (t) => !dayjs(t.createdAt).isSame(dayjs(), "day")
  );

  const filteredByTypeTodaysData =
    transactionType === "all"
      ? todaysdata
      : todaysdata.filter(
          (transaction) => transaction.transactionType === transactionType
        );
  const filteredByTypeNotTodaysData =
    transactionType === "all"
      ? notTodaysdata
      : notTodaysdata.filter(
          (transaction) => transaction.transactionType === transactionType
        );
  return (
    <div>
      <Head />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          minHeight: "93vh",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "85%",
            paddingTop: "20px",
            gap: "20px",
          }}
        >
          <SideBarComponent
            transactionType={transactionType}
            setTransactiontype={setTransactiontype}
          />
          <div style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", gap: "15px" }}>
                <div>
                  <LeftButton />
                </div>
                <p>Last 30 days</p>
                <div>
                  <RightButton />
                </div>
              </div>
              <select className={styles.select1}>
                <option>Newest first</option>
                <option>Oldest first</option>
              </select>
            </div>
            <div>
              <p className={styles.type}>Today</p>
              <div className={styles.records}>
                {todaysdata.length > 0 &&
                  filteredByTypeTodaysData.map((transaction, index) => (
                    <Transaction key={index} transaction={transaction} setTransaction={setTransaction}/>
                  ))}
              </div>
            </div>
            <div>
              <p className={styles.type}>History</p>
              <div className={styles.records}>
                {filteredByTypeNotTodaysData.map((transaction, index) => (
                  <Transaction key={index} transaction={transaction} setTransaction={setTransaction}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
