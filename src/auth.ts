import CredentialsProvider from "next-auth/providers/credentials";
import axiosConfig from "./axios/axiosConfig";
import { cookies } from "next/headers";

// type
import type { AuthOptions } from "next-auth";

const auth: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await axiosConfig.post("/login", credentials);
          if (res?.data) {
            cookies().set("access", res.data, {
              sameSite: "lax",
              httpOnly: true,
              maxAge: 60 * 60 * 24 * 15,
            });
            return res.data;
          } else {
            return res;
          }
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  session: {
    maxAge: 60 * 60 * 24 * 15,
  },
};

export default auth;
