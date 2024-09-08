import type { CSSProperties } from 'react';
import type { StatusFreeProps } from '@/types/generals.types';

export default function StatusFree({ isFree, free, pay }: StatusFreeProps) {
  const styleStatus: CSSProperties = {
    background: isFree === 'pay' ? '#00D084' : '#2b2b2b',
    color: isFree === 'pay' ? '#fff' : '#fff'
  }
  return <p className='py-1 px-2 rounded-full font-light text-xs' style={styleStatus}>{isFree === 'pay' ? pay : free}</p>
}
