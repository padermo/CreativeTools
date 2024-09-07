import { Input } from 'antd'

// types
import type { InputReusableProps } from './types';

export default function InputReusable({ id, value, placeholder, type, onChange, onPaste }: InputReusableProps) {
  switch (type) {
    case 'password':
      return (
        <Input.Password id={id} placeholder={placeholder} value={value} onChange={onChange} className='w-full rounded-md border text-[#222] dark:text-white dark:placeholder:text-white' />
      )
    case 'normal':
      return (
        <Input id={id} placeholder={placeholder} value={value} onChange={onChange} onPaste={onPaste} className='w-full rounded-md border text-[#222] dark:text-white dark:placeholder:text-white' />
      )
    case 'area':
      return (
        <Input.TextArea id={id} rows={4} placeholder={placeholder} value={value} onChange={onChange} style={{ resize: 'none' }} className='w-full rounded-md border text-[#222] dark:text-white dark:placeholder:text-white' />
      )
    default:
      break;
  }
}
