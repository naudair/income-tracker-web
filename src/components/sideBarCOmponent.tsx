import { AddIcon } from "@/components/images/addIcon";
import { RightArrow } from "@/components/images/rightArrow";
import { SeeIcon } from "@/components/images/seeIcon";
import styles from "@/styles/recordPage.module.css";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { categoryData } from "@/utils/data";
import AddTransactionModal from "./addTransactionModal";

interface Props {
  transactionType: string;
  setTransactiontype: (type: string) => void;
}

export const SideBarComponent : React.FC<Props> = ({ transactionType, setTransactiontype }) => {
  return (
    <div className={styles.sidebar}>
      <h2>Records</h2>
      <AddTransactionModal/>
      <input
        style={{ width: "20vw", height: "32px", margin: "20px 0 0 0" }}
        placeholder="Search"
      />
      <div className={styles.typesContainer}>
        <p className={styles.type}>Type</p>
        <div style={{ paddingLeft: "8px", fontWeight: "300" }}>
          <RadioGroup
            value={transactionType}
            onChange={(e) => setTransactiontype(e.target.value)}
          >
            <FormControlLabel
              value="all"
              control={<Radio />}
              label="All"
              className={styles.radio}
            />
            <FormControlLabel
              value="income"
              control={<Radio />}
              label="Income"
              className={styles.radio}
            />
            <FormControlLabel
              value="expense"
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
    </div>
  );
};
