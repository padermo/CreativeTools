import { Select } from "antd";

// types
import type { SelectReusableProps } from "../types";

export default function SelectReusable({
  id,
  options,
  placeholder,
  onChange,
}: SelectReusableProps) {
  return (
    <Select
      id={id}
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full"
    />
  );
}
