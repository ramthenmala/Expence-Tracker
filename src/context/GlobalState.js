import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//
const initialState = {
  transactions: [],
};

//creat global context
export const GlobalContext = createContext(initialState);

// ProvideComponent

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const delTransation = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        delTransation,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
