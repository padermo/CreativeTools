"use client";
import { useState } from "react";
import { useCallback } from "react";
import { useTranslations } from "next-intl";
import { signOut, useSession } from "next-auth/react";
import { removeCookie } from "@/app/actions";
import { Link } from "@/navigation";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import MenuNavbar from "./Menu";
import UserMenu from "./UserMenu";
import Logo from "../SVG/Logo";
import Lang from "../Config/Lang";
import ButtonReusable from "../Reusable/Button";
import type { MenuProps } from "antd";

export default function Navbar() {
  const [isViewMenu, setIsViewMenu] = useState<boolean>(false);
  const t = useTranslations("Navbar");
  const { status } = useSession();

  const routing = ["/", "/tools", "/auth/login", "/auth/register"];

  const handleOpenMenu = () => {
    setIsViewMenu(!isViewMenu);
  };

  const logout = async () => {
    signOut();
    removeCookie();
  };

  const authItems = useCallback(() => {
    return t.raw("menu").filter((item: string) => {
      if (item === "Log In" || item === "Sign Up") {
        return status !== "authenticated";
      }
      return true;
    });
  }, [status, t]);

  const items = authItems().map((item: string, index: number) => {
    let menu = {
      label: <Link href={routing[index]}>{item}</Link>,
      key: item,
    };
    return menu;
  });

  const userItems: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href={"/favorites"}>{t("favorites")}</Link>,
    },
    {
      key: "2",
      label: (
        <button name="logout" onClick={logout}>
          {t("logout")}
        </button>
      ),
    },
  ];

  return (
    <nav className="w-full max-w-screen-2xl m-auto grid lg:flex gap-y-2 justify-between items-center navigation px-2 py-3">
      <Logo />
      <div className="w-full justify-end items-center gap-x-3 hidden lg:flex">
        <MenuNavbar items={items} mode="horizontal" />
        {status === "authenticated" && <UserMenu items={userItems} />}
        <Lang />
      </div>
      <div className="button-area lg:hidden">
        <ButtonReusable
          icon={isViewMenu ? <CloseOutlined /> : <MenuOutlined />}
          htmlType="button"
          type="primary"
          onClick={handleOpenMenu}
        />
      </div>
      <div
        className={`${isViewMenu ? "grid" : "hidden"} menu-area rounded-md bg-[#111] w-full shadow-lg border border-neutral-800 lg:hidden`}
      >
        <MenuNavbar
          items={status === "authenticated" ? [...items, ...userItems] : items}
          mode="inline"
        />
      </div>
    </nav>
  );
}
