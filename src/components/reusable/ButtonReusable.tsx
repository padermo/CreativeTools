import { Button } from 'antd';

// type
import type { ButtonProps } from '@/types/generals.types';

export default function ButtonReusable({ type, children, loading, onClick }: ButtonProps) {
  return (
    <Button loading={loading} className='h-[50px] flex flex-1 items-center justify-center rounded-md text-white text-lg bg-[#B323CF] lg:flex-initial' type={type} onClick={onClick}>{children}</Button>
  )
}
