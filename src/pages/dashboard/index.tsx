import { upIcon } from "../../components/images/upIcon";
import { downIcon } from "../..//components/images/downIcon";
import BlueCartComponent from "../../components/BlueCartComponent";
import { CartDetail } from "../../components/IncomeExpenceComponent";
import DoughnutChart from "../../components/doughnutChartComponent";
import LastRecords from "../../components/lastRecords";
import Barchart from "../../components/barchartComponent";
import Head from "../../components/headComponent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const isUserLoggedIn = () => {
      const isUser = localStorage.getItem("user");
      if (!isUser) router.replace("/login");
    };
    isUserLoggedIn();
  }, [router]);

  const [transaction, setTransaction] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://income-tracker-service-5w2z.onrender.com/get-transaction"
      );
      const id = localStorage.getItem("userId")
      const userData = response.data.filter((transaction: { userID: string | null; }) => {
        return transaction.userID === id
      })
      setTransaction(userData);
      
    };
    fetchData();
  }, []);

  return (
    <div>
      <Head />
      <div
        style={{
          padding: "2.5vh 7vw",
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
          height: "88vh",
        }}
      >
        <div className="cart">
          <BlueCartComponent />
          <CartDetail
            title="Total Income"
            amount="1 200 000₮"
            desc="Your Income Amount"
            icon={upIcon()}
            status="32% from last month"
          />
          <CartDetail
            title="Total Expense"
            amount="- 1 200 000₮"
            desc=" Your Expence Amount"
            icon={downIcon()}
            status="32% from last month"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Barchart />
          </div>
          <div>
            <DoughnutChart />
          </div>
        </div>
        <div>
          <LastRecords transaction={transaction}/>
        </div>
      </div>
    </div>
  );
}
