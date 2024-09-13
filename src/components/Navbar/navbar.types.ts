import type { ItemType } from "antd/es/menu/interface";

export interface MenuNavbarProps {
  items: [];
  mode: "horizontal" | "vertical" | "inline";
}

export interface UserMenuProps {
  items: ItemType[];
}
