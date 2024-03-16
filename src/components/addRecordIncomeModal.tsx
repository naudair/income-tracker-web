import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "@/styles/recordPage.module.css";
import { ToggleButtonComp } from "./toggleButton";
import { Input } from "@mui/material";

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
  // textAlign:"center",
  display:"flex",
  flexDirection:"column",
  alignItems:"center"
};

export default function AddRecordModal() {
  const [open, setOpen] = React.useState(false);
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
          <div
            style={{
              width:"752px",
              fontSize: "19px",
              fontWeight: "600",
              padding: "20px",
              borderBottom: "1px solid #E2E8F0",
              display:"flex",
              justifyContent:"space-between"
            }}
          >
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
                <ToggleButtonComp />
              </div>
              <div>
                <p style={{ lineHeight: "0px" }}>Amount</p>
                <input style={{ width: "355px" }} type="number" placeholder="00.00" />
              </div>
              <div>
                <p style={{ lineHeight: "0px" }}>Category</p>
                <input
                  style={{ width: "355px", margin: "5px 0 10px 0" }}
                  placeholder="Choose"
                />
              </div>
              <div>
                Date
                <input style={{ width: "355px", marginTop:"8px" }} type="date" />
              </div>
            </div>
            <div style={{ padding: "30px 20px 20px 20px" }}>
              Note
              <textarea className={styles.textbox} placeholder="Write here" />
            </div>
          </div>
          <button className={styles.addBtn} onClick={handleClose} >Add Record</button>
        </Box>
      </Modal>
    </div>
  );
}
