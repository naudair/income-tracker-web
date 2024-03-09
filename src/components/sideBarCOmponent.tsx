import { AddIcon } from "@/components/images/addIcon";
import { RightArrow } from "@/components/images/rightArrow";
import { SeeIcon } from "@/components/images/seeIcon";
import styles from "@/styles/recordPage.module.css";

export default function SideBarComponent() {
  return (
      
        <div className={styles.records}>
          <h2>Records</h2>
          <button className={styles.button}>+ Add</button>
          <input
            style={{ width: "250px", height: "32px" }}
            placeholder="Search"
          />
          <div className={styles.typesContainer}>
            <p className={styles.type}>Types</p>
            <div style={{ paddingLeft: "8px", fontWeight: "300" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <input className={styles.radio} type="radio" />
                <div style={{ paddingTop: "3px" }}>All</div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <input className={styles.radio} type="radio" />
                <div style={{ paddingTop: "3px" }}>Income</div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <input className={styles.radio} type="radio" />
                <div style={{ paddingTop: "3px" }}>Expense</div>
              </div>
            </div>
          </div>
          <div className={styles.categoryContainer}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p className={styles.type}>Category</p>
              <p style={{ color: "rgba(31, 41, 55, 0.2)" }}>Clear</p>
            </div>
            <div style={{ padding: "7px 0 7px 12px", fontWeight: "300" }}>
              {array.map((array) => (
                <div
                  key={array}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "7px 0",
                  }}
                >
                  <div style={{ display: "flex", gap: "10px" }}>
                    <SeeIcon />
                    {array}
                  </div>
                  <RightArrow />
                </div>
              ))}
              <div style={{ display: "flex", gap: "10px", padding: "7px 0" }}>
                <AddIcon />
                Add Category
              </div>
            </div>
          </div>
          {/* <div>
            <p className={styles.type}>Amount Range</p>
            <div>0</div>
            <div>1000</div>
            <div></div>
          </div> */}
        </div>
  );
}

const array = [
  "Food & Drinks",
  "Shopping",
  "Housing",
  "Transportation",
  "Vehicle",
  "Life & Entertainment",
  "Communication, PC",
  "Financial expenses",
  "Investments",
  "Income",
  "Others",
];
