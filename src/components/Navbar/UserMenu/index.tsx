import { UserOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
// types
import type { UserMenuProps } from "../navbar.types";

export default function UserMenu({ items }: UserMenuProps) {
  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <button className="text-[#888] hover:text-white">
        <UserOutlined />
      </button>
    </Dropdown>
  );
}
