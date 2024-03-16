import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const ToggleButtonComp = () => {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton
        style={{
          backgroundColor: alignment === "expense" ? "#0166FF" : "inherit",
          color: alignment === "expense" ? "#ffffff" : "inherit",
          width: "178px",
          height:"40px",
          borderRadius: "20px 0 0 20px",
        }}
        value="expense"
      >
        Expense
      </ToggleButton>
      <ToggleButton
        style={{
          backgroundColor: alignment === "income" ? "#16A34A" : "inherit",
          color: alignment === "income" ? "#ffffff" : "inherit",
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
