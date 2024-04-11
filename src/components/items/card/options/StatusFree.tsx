import type { CSSProperties } from 'react';
import type { StatusFreeProps } from '@/types/generals.types';

export default function StatusFree({isFree, free, pay}:StatusFreeProps){
  const styleStatus:CSSProperties = {
    background: isFree === 'pay' ? '#9337A5' : '#d8d8d8',
    color: isFree === 'pay' ? '#fff' : '#222'
  }
  return <p className='py-1 px-2 rounded-full font-light text-xs' style={styleStatus}>{isFree === 'pay' ? pay : free}</p>
}