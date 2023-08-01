import React, { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initail State

const initial_State = {
  transactions: [
    { id: 1, text: "Flower", amount: -400 },
    { id: 2, text: "Salary", amount: 200 },
    { id: 3, text: "Book", amount: 150 },
    { id: 4, text: "Camera", amount: 350 },
  ],
};
//create context
export const GlobalContext = createContext(initial_State);
//Provider Componets
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initial_State);

  //Action
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
