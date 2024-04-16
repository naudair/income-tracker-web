import { ReactNode } from "react";
import { Transaction } from "./transactionComponent";

export const CartDetail = ({
  title,
  type,
  desc,
  icon,
  status,
  transaction,
}: {
  title: string;
  type: string;
  desc: string;
  icon: ReactNode;
  status: string;
  transaction: Transaction[];
}) => {
  let incomeAmount = 0;
  let expenseAmount = 0;
  transaction.map((transaction) => {
    if (transaction.transactionType === "income") {
      incomeAmount = incomeAmount + transaction.amount;
    } else {
      expenseAmount = expenseAmount + transaction.amount;
    }
  });
  const renderTotalAmount = (type: string) => {
    if (type === "Income") {
      return <div>{incomeAmount}₮</div>;
    } else {
      return <div>-{expenseAmount}₮</div>;
    }
  };

  return (
    <div className="incomeExpense">
      <div className="cart-title">{title}</div>
      <div className="cart-amount">{renderTotalAmount(type)}</div>
      <div className="desc">{desc}</div>
      <div className="cart-status">
        {icon} {status}
      </div>
    </div>
  );
};
