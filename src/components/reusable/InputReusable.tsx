'use client'
import { Input } from 'antd'
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt';

// types
import type { InputReusableProps } from '@/types/generals.types';

export default function InputReusable({id, error, value, placeholder, type, onChange, onPaste}:InputReusableProps){
  switch(type){
    case 'password':
      return (
        <ConfigThemeAnt>
          <Input.Password id={id} placeholder={placeholder} value={value} onChange={onChange} style={{borderColor: error && '#BC2929'}} className='w-full rounded-md border p-2 text-[#222] dark:text-white dark:placeholder:text-gray-400'/>
        </ConfigThemeAnt>
      )
    case 'normal':
      return (
        <ConfigThemeAnt>
          <Input id={id} placeholder={placeholder} value={value} onChange={onChange} onPaste={onPaste} style={{borderColor: error && '#BC2929'}} className='w-full rounded-md border p-2 text-[#222] dark:text-white dark:placeholder:text-gray-400'/>
        </ConfigThemeAnt>
      )
    default:
      break;
  }
}