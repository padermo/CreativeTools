import { Select } from "antd";

// types
import type { SelectReusableProps } from "../types";

export default function SelectReusable({
  id,
  options,
  placeholder,
  width = "w-full",
  onChange,
}: SelectReusableProps) {
  return (
    <Select
      id={id}
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      className={width}
      showSearch={false}
    />
  );
}
