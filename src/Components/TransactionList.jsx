import React, { useContext } from "react";
import { GlobalContext } from "./Context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      {transactions.length === 0 ? (
        <p className="Msg">No item Found!</p>
      ) : (
        <ul className="list">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      )}
    </>
  );
};
export default TransactionList;
