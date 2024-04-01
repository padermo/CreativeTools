'use client'
import { Button } from 'antd';
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt';

// type
import type { ButtonProps } from '@/types/generals.types';

export default function ButtonReusable({type, children, loading, onClick}:ButtonProps){
  return (
    <ConfigThemeAnt>
      <Button loading={loading} className='flex items-center justify-center rounded-md px-3 py-5 text-white text-lg bg-[#B323CF]' type={type} onClick={onClick}>{children}</Button>
    </ConfigThemeAnt>
  )
}