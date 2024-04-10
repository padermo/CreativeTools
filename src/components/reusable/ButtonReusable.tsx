'use client'
import { Button } from 'antd';
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt';

// type
import type { ButtonProps } from '@/types/generals.types';

export default function ButtonReusable({type, children, loading, onClick}:ButtonProps){
  return (
    <ConfigThemeAnt>
      <Button loading={loading} className='h-[50px] flex items-center justify-center rounded-md text-white text-lg bg-[#B323CF]' type={type} onClick={onClick}>{children}</Button>
    </ConfigThemeAnt>
  )
}