/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
  const user = localStorage.getItem("userConnected");
  const event = localStorage.getItem("selectedEvent");
  const [selectedEvent, setSelectedEvent] = useState(JSON.parse(event));
  const [userConnected, setUserConnected] = useState(JSON.parse(user));

  return (
    <Context.Provider
      value={{
        selectedEvent,
        setSelectedEvent,
        userConnected,
        setUserConnected,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
