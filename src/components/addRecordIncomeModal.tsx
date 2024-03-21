import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "@/styles/recordPage.module.css";
import { ToggleButtonComp } from "./toggleButton";
import {
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  width: "792px",
  height: "512px",
  borderRadius: "12px",
  bgcolor: "#ffffff",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const selectStyle = {
  autoFocus: false,
  PaperProps: {
    sx: {
      borderRadius: "12px",
      paddingInline: "8px",
      border: "1px solid #E0E0E0",
      boxShadow:
        "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.10)",
    },
  },
};

export default function AddRecordModal() {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState("");
  const [type, setType] = React.useState("expense");
  const handleCategory = (e: SelectChangeEvent) => {
    setCategory(e.target.value);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <button className={styles.button} onClick={handleOpen}>
        + Add
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.modalHead}>
            <span>Add Record</span>
            <span onClick={handleClose}>×</span>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                padding: "20px",
              }}
            >
              <div>
                <ToggleButtonComp type={type}  setType={setType}/>
              </div>
              <div>
                <p style={{ lineHeight: "0px" }}>Amount</p>
                <input
                  style={{ width: "355px" }}
                  type="number"
                  placeholder="₮ 000.00"
                />
              </div>
              <div>
                <p style={{ lineHeight: "0px" }}>Category</p>
                  <Select
                  className={styles.select}
                    value={category}
                    onChange={handleCategory}
                    MenuProps={selectStyle}
                  >
                    <MenuItem value={"Bills"}>Bills</MenuItem>
                    <MenuItem value={"Food"}>Food</MenuItem>
                    <MenuItem value={"Shopping"}>Shopping</MenuItem>
                    <MenuItem value={"Clothing"}>Clothing</MenuItem>
                  </Select>
              </div>
              <div>
                Date
                <input
                  style={{ width: "355px", marginTop: "8px" }}
                  type="date"
                />
              </div>
            </div>
            <div style={{ padding: "30px 20px 20px 20px" }}>
              Note
              <textarea className={styles.textbox} placeholder="Write here" />
            </div>
          </div>
          <button className={styles.addBtn} onClick={handleClose}
           style={{
            backgroundColor: type === "expense" ? "#0166FF" : "#16A34A" }}>
            Add Record 
          </button>
        </Box>
      </Modal>
    </div>
  );
}
