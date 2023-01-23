import React, { createContext, useState } from "react";

const AppContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const values = {};

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
