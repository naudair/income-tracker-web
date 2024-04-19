import { RightArrow } from "./images/rightArrow";
import { SeeIcon } from "./images/seeIcon";
import styles from "../styles/recordPage.module.css";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { categoryData } from "../utils/data";
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
        </div>
      </div>
    </div>
  );
};
