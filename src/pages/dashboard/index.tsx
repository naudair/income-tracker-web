import { Icon } from "@/components/images/icon";
import { upIcon } from "@/components/images/upIcon";
import { downIcon } from "@/components/images/downIcon";
import { Avatar } from "@mui/material";
import BlueCartComponent from "@/components/BlueCartComponent";
import { CartDetail } from "@/components/IncomeExpenceComponent";
import DoughnutChart from "@/components/doughnutChartComponent";
import LastRecords from "@/components/lastRecordsComponent";
import Barchart from "@/components/barchartComponent";

export default function Dashboard() {
  return (
    <div>
      <div className="navbar">
        <div
          style={{
            display: "flex",
            gap: "2vw",
            alignItems: "center",
            fontSize: "18px",
          }}
        >
          <Icon />
          <p style={{ fontWeight: "500" }}>Dashboard</p>
          <p style={{ fontWeight: "300" }}>Records</p>
        </div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <button style={{ width: "120px", height: "35px", fontSize: "18px" }}>
            + Record
          </button>
          <Avatar src="https://s3-alpha-sig.figma.com/img/4b8f/8a06/87e8569e17a69979cf08dac0f798bd37?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PSEkV4v7iQZ1bT6xha8ER-2Kan0HkSA2wiMMmx5M9PzpvYZtE2Ix5gfyobkyW9KwlkCxKpq6EBtATLjHbPrStvnLiLalJytF3vtz7RMIGv86zg5icLyDrIUfpMAGwRkrVThi2IZk8TgC55-83bNW68hQPyhFBnfkwBusr-9NqhBMKVkmHFSIgMYrSlol6foBWhhtvbXQSfAw-QonV3r7BnxHYspicVvoHOVc~H0Tk1CflxFu~Uz4UgoV6xZnJQdK7AJHCdoaP4KLb4EJyIvEMJ1NxREmas8faYLXmStSektIE4MHC3ksjOVu6dtHqKcbUU2pw5Kb-LxaRCy9r~gVsA__" />
        </div>
      </div>
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
