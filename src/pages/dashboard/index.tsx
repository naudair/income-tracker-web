import { upIcon } from "../../components/images/upIcon";
import { downIcon } from "../..//components/images/downIcon";
import BlueCartComponent from "../../components/BlueCartComponent";
import { CartDetail } from "../../components/IncomeExpenceComponent";
import DoughnutChart from "../../components/doughnutChartComponent";
// import { DoughnutChart } from "@/components/dounghnutComp";
import LastRecords from "../../components/LastRecords";
import Barchart from "../../components/barchartComponent";
import Head from "../../components/headComponent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Index() {
  const router = useRouter();
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    const isUserLoggedIn = () => {
      const isUser = localStorage.getItem("user");
      if (!isUser) router.replace("/login");
    };
    isUserLoggedIn();
  }, [router]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://income-tracker-service-5w2z.onrender.com/get-transaction"
      );
      const id = localStorage.getItem("userId");
      const userData = response.data.filter(
        (transaction: { userID: string | null }) => {
          return transaction.userID === id;
        }
      );
      setTransaction(userData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Head />
      <div
        style={{
          padding: "2.5vh 15vw",
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
          height: "88vh",
        }}
      >
        <div className="cart">
          <BlueCartComponent />
          <CartDetail
            transaction={transaction}
            title="Total Income"
            type="Income"
            desc="Your Income Amount"
            icon={upIcon()}
          />
          <CartDetail
            transaction={transaction}
            title="Total Expense"
            type="Expense"
            desc="Your Expense Amount"
            icon={downIcon()}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Barchart />
          </div>
          <div>
            <DoughnutChart transaction={transaction} label={""} />
          </div>
        </div>
        <div>
          <LastRecords transaction={transaction} />
        </div>
      </div>
    </div>
  );
}
