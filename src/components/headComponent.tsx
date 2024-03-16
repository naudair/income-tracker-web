import { Icon } from "@/components/images/icon";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";
import AddRecordModal from "./addRecordIncomeModal";

export default function Head() {
    const router = useRouter()
  return (
    <div className="navbar">
      <div
        style={{
          display: "flex",
          flexDirection:'row',
          gap: "2vw",
          alignItems: "center",
          fontSize: "18px",
        }}
      >
        <Icon />
        <p onClick={() => router.push("/dashboard")} style={{ fontWeight: router.pathname==='/dashboard' ?"500":'300' }}>Dashboard</p>
        <p onClick={() => router.push("/records")}style={{ fontWeight: router.pathname==='/records' ?"500":'300'}}>Records</p>
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <div><AddRecordModal/></div>
        <Avatar src="https://s3-alpha-sig.figma.com/img/4b8f/8a06/87e8569e17a69979cf08dac0f798bd37?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PSEkV4v7iQZ1bT6xha8ER-2Kan0HkSA2wiMMmx5M9PzpvYZtE2Ix5gfyobkyW9KwlkCxKpq6EBtATLjHbPrStvnLiLalJytF3vtz7RMIGv86zg5icLyDrIUfpMAGwRkrVThi2IZk8TgC55-83bNW68hQPyhFBnfkwBusr-9NqhBMKVkmHFSIgMYrSlol6foBWhhtvbXQSfAw-QonV3r7BnxHYspicVvoHOVc~H0Tk1CflxFu~Uz4UgoV6xZnJQdK7AJHCdoaP4KLb4EJyIvEMJ1NxREmas8faYLXmStSektIE4MHC3ksjOVu6dtHqKcbUU2pw5Kb-LxaRCy9r~gVsA__" />
      </div>
    </div>
  );
}
