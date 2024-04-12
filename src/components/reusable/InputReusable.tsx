'use client'
import { Input } from 'antd'
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt';

// types
import type { InputReusableProps } from './types';

export default function InputReusable({id, value, placeholder, type, onChange, onPaste}:InputReusableProps){
  switch(type){
    case 'password':
      return (
        <ConfigThemeAnt>
          <Input.Password id={id} placeholder={placeholder} value={value} onChange={onChange} className='w-full rounded-md border text-[#222] dark:text-white dark:placeholder:text-white'/>
        </ConfigThemeAnt>
      )
    case 'normal':
      return (
        <ConfigThemeAnt>
          <Input id={id} placeholder={placeholder} value={value} onChange={onChange} onPaste={onPaste} className='w-full rounded-md border text-[#222] dark:text-white dark:placeholder:text-white'/>
        </ConfigThemeAnt>
      )
    case 'area': 
      return (
        <ConfigThemeAnt>
          <Input.TextArea id={id} rows={4} placeholder={placeholder} value={value} onChange={onChange} style={{resize:'none'}} className='w-full rounded-md border text-[#222] dark:text-white dark:placeholder:text-white'/>
        </ConfigThemeAnt>
      )
    default:
      break;
  }
}