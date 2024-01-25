import AsyncStorage from "@react-native-async-storage/async-storage";

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logOut: () => {},
});

function AuthContextProvider({ children }) {

  const [authToken, setAuthToken] = useState();

 
 

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem('token',token);
  }

  function logOut() {
    setAuthToken(null);
    AsyncStorage.removeItem('token')
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logOut: logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
