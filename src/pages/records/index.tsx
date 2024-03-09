import Head from "@/components/headComponent";
import { LeftButton } from "@/components/images/leftButton";
import { RightButton } from "@/components/images/rightButton";
// import RecordHomePage from "@/components/recordHomePage";
import SideBarComponent from "@/components/sideBarCOmponent";
import styles from "@/styles/recordPage.module.css";

export default function RecordPage() {
  return (
    <div>
      <Head />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "93vh",
          backgroundColor: "rgba(243, 244, 246, 1)",
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
          <SideBarComponent />
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
              <select className={styles.select}>
                <option>Newest first</option>
                <option>Oldest first</option>
              </select>
            </div>
            <div>
              <p className={styles.type}>Today</p>
              <div>
                <div>lending renting</div>
              </div>
            </div>
            <div>
              <p className={styles.type}>Yesterday</p>
              <div>lending renting</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
