"use client";
import { useTranslations } from "next-intl";
import { signOut, useSession } from "next-auth/react";
import { removeCookie } from "@/app/actions";
import MenuNavbar from "./Menu";
import { Link } from "@/navigation";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const { status } = useSession();

  const routing = ["/", "/tools", "/auth/login", "/auth/register"];

  const logout = async () => {
    signOut();
    removeCookie();
  };

  const authItems = t.raw("menu").filter((item) => {
    if (item === "Log In" || item === "Sign Up") {
      return status !== "authenticated";
    }
    return true;
  });

  const items = authItems.map((item, index) => {
    let menu = {
      label: <Link href={routing[index]}>{item}</Link>,
      key: item,
    };
    return menu;
  });

  return (
    <nav>
      <MenuNavbar items={items} mode="horizontal" />
    </nav>
  );
}
