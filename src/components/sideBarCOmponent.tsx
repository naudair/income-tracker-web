import { AddIcon } from "@/components/images/addIcon";
import { RightArrow } from "@/components/images/rightArrow";
import { SeeIcon } from "@/components/images/seeIcon";
import styles from "@/styles/recordPage.module.css";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import AddRecordModal from "./addRecordIncomeModal";
import { categoryData } from "@/utils/data";

export const SideBarComponent =  ()=>{
  return (
    <div className={styles.records}>
      <h2>Records</h2>

      <AddRecordModal />
      <input
        style={{ width: "20vw", height: "32px", margin: "20px 0 0 0" }}
        placeholder="Search"
      />
      <div className={styles.typesContainer}>
        <p className={styles.type}>Type</p>
        <div style={{ paddingLeft: "8px", fontWeight: "300" }}>
          <RadioGroup>
            <FormControlLabel
              value="All"
              control={<Radio />}
              label="All"
              className={styles.radio}
            />
            <FormControlLabel
              value="Income"
              control={<Radio />}
              label="Income"
              className={styles.radio}
            />
            <FormControlLabel
              value="Expense"
              control={<Radio />}
              label="Expense"
              className={styles.radio}
            />
          </RadioGroup>
        </div>
      </div>
      <div className={styles.categoryContainer}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className={styles.type}>Category</p>
          <p style={{ color: "rgba(31, 41, 55, 0.2)" }}>Clear</p>
        </div>
        <div style={{ padding: "7px 0 7px 12px", fontWeight: "300" }}>
          {categoryData.map((array) => (
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
};
