"use client";
import { Menu } from "antd";

export default function MenuNavbar({ items, mode }) {
  return <Menu items={items} mode={mode} />;
}
