"use server";
import { cookies } from "next/headers";

export async function createCookie(token: string) {
  cookies().set("creative-auth-token", token, {
    expires: 60 * 60 * 24 * 15,
  });
}

export async function removeCookie() {
  cookies().delete("creative-auth-token");
}

export async function getCookie() {
  return cookies().get("creative-auth-token");
}
