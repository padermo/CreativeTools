"use client";
import { useTranslations } from "next-intl";
import { signOut, useSession } from "next-auth/react";
import { removeCookie } from "@/app/actions";
import { Link } from "@/navigation";
import MenuNavbar from "./Menu";
import Logo from "../svg/Logo";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const { status } = useSession();

  const routing = ["/", "/tools", "/auth/login", "/auth/register"];

  const logout = async () => {
    signOut();
    removeCookie();
  };

  const authItems = t.raw("menu").filter((item:string) => {
    if (item === "Log In" || item === "Sign Up") {
      return status !== "authenticated";
    }
    return true;
  });

  const items = authItems.map((item:string, index:number) => {
    let menu = {
      label: <Link href={routing[index]}>{item}</Link>,
      key: item,
    };
    return menu;
  });

  return (
    <nav className="w-full max-w-screen-2xl m-auto grid lg:flex justify-between items-center px-2 py-3">
      <Logo />
      <div className="w-full hidden justify-end lg:flex"><MenuNavbar items={items} mode="horizontal" /></div>
    </nav>
  );
}
