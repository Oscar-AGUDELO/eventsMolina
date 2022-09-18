/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
  const [pathUrl, SetPathUrl] = useState("");
  const user = localStorage.getItem("AdminPente");
  const [userIsConnected, setUserIsConnected] = useState(JSON.parse(user));

  return (
    <Context.Provider
      value={{
        pathUrl,
        SetPathUrl,
        userIsConnected,
        setUserIsConnected,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
