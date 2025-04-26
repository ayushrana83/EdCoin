import { createContext, ReactNode, useContext, useState } from "react";

// Create context for user
const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  const loginUser = ( email ,password) => {
    const user = { email, password };
    setUser(user);
  };

  const signUpUser = (email, password) => {
    const user = { email, password };
    setUser(user);
  };

  const logoutUser = () => {
    setUser(undefined);
  };

  return (
    <UserContext.Provider value={{ user, loginUser, signUpUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
};
