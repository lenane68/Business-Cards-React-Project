// 📁 src/context/auth.context.jsx
import { createContext, useContext, useState } from "react";
import usersService from "../services/usersService";
import httpService from "../services/httpService";

const AuthContext = createContext();

const createUser = async (user) => {
  const { data: users } = await httpService.get("/users");

  const exists = users.find((u) => u.email === user.email);
  if (exists) {
    throw { response: { status: 400, data: "User already registered." } };
  }

  const newUser = { ...user, favorites: [] };
  await httpService.post("/users", newUser);
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(usersService.getLoggedInUser());

  const login = async (credentials) => {
    const { data: users } = await httpService.get("/users");

    const user = users.find(
      (u) =>
        u.email.toLowerCase() === credentials.email.toLowerCase() &&
        u.password === credentials.password.trim()
    );

    if (!user) throw new Error("Invalid credentials");

    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    usersService.logout();
    setUser(null);
  };

  const updateUserFavorites = (favorites) => {
    const updatedUser = { ...user, favorites };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };
  

  return (
    <AuthContext.Provider
      value={{
        user,
        createUser,
        login,
        logout,
        updateUserFavorites,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
