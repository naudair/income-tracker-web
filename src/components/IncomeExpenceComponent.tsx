import { ReactNode } from "react";

export const CartDetail = ({title, amount, desc, icon, status}: {title: string, amount:string, desc: string, icon: ReactNode, status: string,}) => {
  return (
    <div className="incomeExpense">
      <div className="cart-title">{title}</div>
      <div className="cart-amount">{amount} </div>
      <div className="desc">{desc}</div>
      <div className="cart-status">{icon} {status}</div>
    </div>
  );
};
