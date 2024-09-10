import { UserOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
// types
import type { UserMenuProps } from "../navbar.types";

export default function UserMenu({ items }: UserMenuProps) {
  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <button className="rounded-full p-2 flex items-center border-none outline-none text-[#888] hover:text-white hover:bg-[#1b1b1b]">
        <UserOutlined />
      </button>
    </Dropdown>
  );
}
