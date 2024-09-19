"use server";
import { cookies } from "next/headers";

export async function createCookie(token: string) {
  const expires = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000);
  cookies().set("creative-auth-token", token, { expires });
}

export async function removeCookie() {
  cookies().delete("creative-auth-token");
}

export async function getCookie() {
  return cookies().get("creative-auth-token");
}
