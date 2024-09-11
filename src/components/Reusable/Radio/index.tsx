import { Radio } from "antd";

// types
import type { RadioReusableProps } from "../types";

export default function RadioReusable({
  children,
  onChange,
}: RadioReusableProps) {
  return <Radio.Group onChange={onChange}>{children}</Radio.Group>;
}
