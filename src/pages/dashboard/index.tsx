import { upIcon } from "@/components/images/upIcon";
import { downIcon } from "@/components/images/downIcon";
import BlueCartComponent from "@/components/BlueCartComponent";
import { CartDetail } from "@/components/IncomeExpenceComponent";
import DoughnutChart from "@/components/doughnutChartComponent";
import LastRecords from "@/components/lastRecordsComponent";
import Barchart from "@/components/barchartComponent";
import Head from "@/components/headComponent";

export default function Dashboard() {
  return (
    <div>
      <Head/>
      <div
        style={{
          padding: "2.5vh 7vw",
          backgroundColor: "rgba(243, 244, 246, 1)",
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
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
          <LastRecords />
        </div>
      </div>
    </div>
  );
}
