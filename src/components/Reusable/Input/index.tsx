import { Input } from 'antd'

// types
import type { InputReusableProps } from '../types';

export default function InputReusable({ id, value, placeholder, type, onChange, onPaste }: InputReusableProps) {
  switch (type) {
    case 'password':
      return (
        <Input.Password id={id} placeholder={placeholder} value={value} onChange={onChange} />
      )
    case 'normal':
      return (
        <Input id={id} placeholder={placeholder} value={value} onChange={onChange} onPaste={onPaste} />
      )
    case 'area':
      return (
        <Input.TextArea id={id} rows={4} placeholder={placeholder} value={value} onChange={onChange} style={{ resize: 'none' }} />
      )
    default:
      break;
  }
}
