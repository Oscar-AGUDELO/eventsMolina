/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
  const [pathUrl, SetPathUrl] = useState("");
  const user = localStorage.getItem("AdminPente");
  const [userIsConnected, setUserIsConnected] = useState(JSON.parse(user));
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <Context.Provider
      value={{
        pathUrl,
        SetPathUrl,
        userIsConnected,
        setUserIsConnected,
        screenWidth,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
