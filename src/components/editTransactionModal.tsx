/* eslint-disable max-lines */
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { EditIcon } from "./images/editIcon";
import styles from "../styles/recordPage.module.css";
import { ToggleButtonComp } from "./toggleButton";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Transaction } from "./transactionComponent";
import { Dispatch, SetStateAction } from "react";

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
interface Props {
  typeF: string;
  amountF: number;
  categoryF: string;
  noteF: string;
  id: string;
  _id: string;
  transaction: Transaction;
  setTransaction: Dispatch<SetStateAction<Transaction[]>>;
}

export const EditModal: React.FC<Props> = ({
  typeF,
  amountF,
  categoryF,
  noteF,
  id,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [transactionType, setTransactionType] = useState(typeF);
  const [amount, setAmount] = useState(amountF);
  const [amountError, setAmountError] = useState("");
  const [category, setCategory] = useState(categoryF);
  const [note, setNote] = useState(noteF);
  const [noteError, setNoteError] = useState("");
  const [required, setRequired] = useState("");

  const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(event.target.value);
    if (!amount) {
      setAmountError("Amount is empty.");
    } else {
      setAmountError("");
    }
    setAmount(amount);
  };
  const handleCategory = (e: SelectChangeEvent) => {
    setCategory(e.target.value);
  };
  const handleChangeNote = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const note = event.target.value;
    if (note === "") {
      setNoteError("Note is empty.");
    } else {
      setNoteError("");
    }
    setNote(note);
  };

  const updateTransaction = async () => {
    try {
      const response = await axios.post(
        "https://income-tracker-service-5w2z.onrender.com/update-transaction",
        {
          id,
          transactionType,
          amount,
          category,
          note,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateTransaction = () => {
    if (amount < 10 || note === "") {
      setRequired("Please, enter all inputs.");
    } else {
      updateTransaction();
      handleClose();
    }
  };

  return (
    <div>
      <div onClick={handleOpen}>
        <EditIcon />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.modalHead}>
            <span>Edit Record</span>
            <span onClick={handleClose}>×</span>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "20px",
              }}
            >
              <div>
                <ToggleButtonComp
                  type={transactionType}
                  setType={setTransactionType}
                />
              </div>
              <div>
                <p style={{ lineHeight: "0px" }}>Amount</p>
                <input
                  style={{ width: "355px" }}
                  value={amount}
                  type="number"
                  placeholder="₮ 000.00"
                  onChange={handleChangeAmount}
                />
                <div className="error">{amountError}</div>
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
                  <MenuItem value={"Clothing"}>Clothing</MenuItem>
                  <MenuItem value={"Food"}>Food</MenuItem>
                  <MenuItem value={"Shopping"}>Shopping</MenuItem>
                </Select>
              </div>
            </div>
            <div style={{ padding: "30px 20px 20px 20px" }}>
              Note
              <textarea
                className={styles.textbox}
                value={note}
                placeholder="Write here"
                onChange={handleChangeNote}
              />
              <div className="error">{noteError}</div>
            </div>
          </div>
          <button
            className={styles.addBtn}
            onClick={() => handleUpdateTransaction()}
            style={{
              backgroundColor:
                transactionType === "expense" ? "#0166FF" : "#16A34A",
            }}
          >
            Edit Record
          </button>
          <div className="error">{required}</div>
        </Box>
      </Modal>
    </div>
  );
};
