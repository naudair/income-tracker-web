import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

interface ToggleButtonProps {
  type: string;
  setType: (type: string) => void;
}

export const ToggleButtonComp : React.FC<ToggleButtonProps> = ({type, setType}) => {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setType(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={type}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton
        style={{
          backgroundColor: type === "expense" ? "#0166FF" : "#ffffff",
          color: type === "expense" ? "#ffffff" : "black",
          width: "178px",
          height:"40px",
          borderRadius: "20px 0 0 20px",
          borderRight:"2px solid rgba(0, 0, 0, 0.12)"
        }}
        value="expense"
      >
        Expense
      </ToggleButton>
      <ToggleButton
        style={{
          backgroundColor: type === "income" ? "#16A34A" : "#ffffff",
          color: type === "income" ? "#ffffff" : "black",
          width: "178px",
          height:"40px",
          borderRadius: "0 20px 20px 0",
        }}
        value="income"
      >
        Income
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
