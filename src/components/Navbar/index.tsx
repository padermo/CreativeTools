"use client";
import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useAuth } from "@/context/AuthContext";
import MenuNavbar from "./Menu";
import UserMenu from "./UserMenu";
import Logo from "../SVG/Logo";
import Lang from "../Config/Lang";
import ButtonReusable from "../Reusable/Button";

// types
import type { MenuProps } from "antd";
import type { ItemType } from "antd/es/menu/interface";

export default function Navbar() {
  const [isViewMenu, setIsViewMenu] = useState<boolean>(false);
  const t = useTranslations("Navbar");
  const { status, logOut } = useAuth();

  const handleOpenMenu = () => {
    setIsViewMenu(!isViewMenu);
  };

  const navigateOptions: MenuProps["items"] = t
    .raw("menu")
    .map((opt: { href: string; label: string }) => {
      const menu = {
        key: opt.label,
        label: <Link href={opt.href}>{opt.label}</Link>,
      };
      return menu;
    });

  const navigateOptionsAuth: MenuProps["items"] = t
    .raw("auth")
    .map((opt: { href: string; label: string }) => {
      const menu = {
        key: opt.label,
        label: <Link href={opt.href}>{opt.label}</Link>,
      };
      return menu;
    });

  const userItems: MenuProps["items"] = useCallback(() => {
    return t.raw("user").map((opt: { href: string | null; label: string }) => {
      return {
        key: opt.label,
        label:
          opt.href !== null ? (
            <Link href={opt.href}>{opt.label}</Link>
          ) : (
            <button onClick={logOut}>{opt.label}</button>
          ),
      };
    });
  }, [status, t])();

  return (
    <nav className="w-full max-w-screen-2xl m-auto grid lg:flex gap-y-2 justify-between items-center navigation px-2 py-3">
      <Logo />
      <div className="w-full justify-end items-center gap-2 hidden lg:flex">
        <MenuNavbar
          items={
            status === "unauthenticated"
              ? [...(navigateOptions ?? []), ...(navigateOptionsAuth ?? [])]
              : (navigateOptions ?? [])
          }
          mode="horizontal"
        />
        {status === "authenticated" && (
          <UserMenu items={userItems as ItemType[]} />
        )}
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
          items={
            status === "authenticated"
              ? [...(navigateOptions ?? []), ...(userItems ?? [])]
              : [...(navigateOptions ?? []), ...(navigateOptionsAuth ?? [])]
          }
          mode="inline"
        />
      </div>
    </nav>
  );
}
