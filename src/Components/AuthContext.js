import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isAdminLoggedIn, setAdminIsLoggedIn] = useState(false);
  const login = (user) => {
    setIsLoggedIn(true);
    setUserData(user);
    localStorage.setItem("isLoggedIn", true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.setItem("isLoggedIn", false);
  };
  const loginAdmin = () => {
    setAdminIsLoggedIn(true);
    localStorage.setItem("isAdminLoggedIn", true);
    // localStorage.setItem("isLoggedIn", true);
  };

  const logoutAdmin = () => {
    setAdminIsLoggedIn(false);
    localStorage.setItem("isAdminLoggedIn", false);
    // localStorage.setItem("isLoggedIn", true);
  };
  const value = {
    isAdminLoggedIn,
    isLoggedIn,
    userData,
    login,
    logout,
    loginAdmin,
    logoutAdmin,
    setIsLoggedIn,
    setAdminIsLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
