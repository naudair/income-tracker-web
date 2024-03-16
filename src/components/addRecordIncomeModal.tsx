import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "@/styles/recordPage.module.css";

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
  //   padding:"25px",
  boxSizing: "border-box",
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
              fontSize: "19px",
              fontWeight: "600",
              padding: "20px",
              borderBottom: "1px solid #E2E8F0",
            }}
          >
            Add Record
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                padding: "20px",
              }}
            >
              <div>
                <button
                  style={{
                    height: "35px",
                    padding: " 0 15px",
                    marginRight: "20px",
                  }}
                >
                  Expense
                </button>
                <button
                  style={{
                    height: "35px",
                    padding: " 0 15px",
                    backgroundColor: "#16A34A",
                  }}
                >
                  Income
                </button>
              </div>
              <input style={{ width: "355px" }} />
              <div>
                <p style={{ lineHeight:"0px" }}>Category</p>
                <input style={{ width: "355px" }} />
              </div>
            </div>
            <div style={{ padding: "20px" }}>
              payee
              <input style={{ width: "355px" }} />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
