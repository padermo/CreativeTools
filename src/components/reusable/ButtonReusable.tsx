'use client'
import { Button } from 'antd';
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt';

// type
import type { ButtonProps } from '@/types/generals.types';

export default function ButtonReusable({type, children, onClick}:ButtonProps){
  return (
    <ConfigThemeAnt>
      <Button className='flex items-center rounded-md px-3 py-5 text-white text-lg bg-[#B323CF]' type={type} onClick={onClick}>{children}</Button>
    </ConfigThemeAnt>
  )
}