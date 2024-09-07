"use client";
import { useCallback } from "react";
import { useTranslations } from "next-intl";
import { signOut, useSession } from "next-auth/react";
import { removeCookie } from "@/app/actions";
import { Link } from "@/navigation";
import MenuNavbar from "./Menu";
import UserMenu from "./UserMenu";
import Logo from "../svg/Logo";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const { status } = useSession();

  const routing = ["/", "/tools", "/auth/login", "/auth/register"];

  const logout = async () => {
    signOut();
    removeCookie();
  };

  const authItems = useCallback(() => {
    return t.raw("menu").filter((item:string) => {
      if (item === "Log In" || item === "Sign Up") {
        return status !== "authenticated";
      }
      return true;
    });
  }, [status, t])

  const items = authItems().map((item:string, index:number) => {
    let menu = {
      label: <Link href={routing[index]}>{item}</Link>,
      key: item,
    };
    return menu;
  });

  return (
    <nav className="w-full max-w-screen-2xl m-auto grid lg:flex justify-between items-center px-2 py-3">
      <Logo />
      <div className="w-full justify-end items-center gap-x-1 hidden lg:flex">
        <MenuNavbar items={items} mode="horizontal" />
        {status === "authenticated" && <UserMenu logout={logout}/>}
      </div>
    </nav>
  );
}
