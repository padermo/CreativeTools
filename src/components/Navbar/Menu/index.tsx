"use client";
import { Menu } from "antd";

// types
import type { MenuNavbarProps } from "../navbar.types";

export default function MenuNavbar({ items, mode }: MenuNavbarProps) {
  return <Menu items={items} mode={mode} className="w-full flex justify-end" />;
}
