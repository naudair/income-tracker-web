import { Icon } from "../components/images/icon";
// import { Avatar } from "@mui/material";
import { useRouter } from "next/router";
import AddTransactionModal from "./addTransactionModal";
import { BackIcon } from "./images/backIocn";
export default function Head() {
  const router = useRouter();
  function deleteLocalStorageData(): void {
    // Check if local storage is supported by the browser
    if (typeof(Storage) !== "undefined") {
        // Remove the desired item from local storage
        localStorage.removeItem( "user"); // Replace "key" with the key of the item you want to delete
        console.log("Data deleted from local storage.");
        router.push("/")
    } else {
        console.log("Local storage is not supported by this browser.");
    }
}
  return (
    <div className="navbar">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2vw",
          alignItems: "center",
          fontSize: "18px",
        }}
      >
        <div onClick={() => router.push("/dashboard")}>
          <Icon />
        </div>
        <p
          onClick={() => router.push("/dashboard")}
          style={{
            fontWeight: router.pathname === "/dashboard" ? "500" : "300",
          }}
        >
          Dashboard
        </p>
        <p
          onClick={() => router.push("/records")}
          style={{ fontWeight: router.pathname === "/records" ? "500" : "300" }}
        >
          Records
        </p>
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <div>
          <AddTransactionModal />
        </div>
        <div onClick={deleteLocalStorageData}>
          <BackIcon />
        </div>
      </div>
    </div>
  );
}
