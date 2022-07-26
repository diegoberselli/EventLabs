import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  email: string;
  name: string;
  id: string;
}

interface UserCredentials {
  email: string;
  password: string;
}

interface AuthState {
  accessToken: string;
  user: User;
}

interface AuthContextData {
  user: User;
  accessToken: string;
  signIn: (userData: UserCredentials) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { push: goTo } = useHistory();
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@eventlabs:accessToken");
    const user = localStorage.getItem("@eventlabs:user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = (userData: UserCredentials) => {
    api
      .post("/login", userData)
      .then((response) => {
        const { accessToken, user } = response.data;
        localStorage.setItem("@eventlabs:accessToken", accessToken);
        localStorage.setItem("@eventlabs:user", JSON.stringify(user));

        setData({ accessToken, user });
        goTo("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    localStorage.removeItem("@eventlabs:accessToken");
    localStorage.removeItem("@eventlabs:user");
    setData({} as AuthState);
    goTo("/");
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        signIn,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
