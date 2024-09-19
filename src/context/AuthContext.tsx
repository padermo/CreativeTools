"use client";
import { useContext, createContext, useEffect, useState } from "react";
import axiosConfig from "@/axios/axiosConfig";
import { createCookie, removeCookie, getCookie } from "@/app/actions";

//types
import type { Children } from "@/types/generals.types";
import type { AuthContextValues } from "@/types/context.types";

export const AuthContext = createContext({} as AuthContextValues);

export default function AuthProvider({ children }: Children) {
  const [status, setStatus] = useState<"authenticated" | "unauthenticated">(
    "unauthenticated",
  );

  const logIn = async (email: string, password: string) => {
    try {
      const response = await axiosConfig.post("/login", { email, password });
      if (response.data) {
        setStatus("authenticated");
        createCookie(response.data);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error("Login filed");
    }
  };

  const logOut = () => {
    removeCookie();
    setStatus("unauthenticated");
  };

  useEffect(() => {
    const verifyCookie = async () => {
      const cookie = await getCookie();
      if (cookie) {
        setStatus("authenticated");
      } else {
        setStatus("unauthenticated");
      }
    };
    verifyCookie();
  }, []);

  const values: AuthContextValues = { status, logIn, logOut };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
