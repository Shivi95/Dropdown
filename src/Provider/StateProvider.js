import React, { createContext, useState, useEffect } from "react";
import { auth } from "../Firebase/firbase";

export const StateContext = createContext();

export const StateProvider = (props) => {
  const [user, setUser] = useState("");

  // user login
  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <StateContext.Provider value={[user, setUser]}>
      {props.children}
    </StateContext.Provider>
  );
};
