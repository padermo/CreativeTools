import { Button } from 'antd';

// type
import type { ButtonProps } from './types';

export default function ButtonReusable({ htmlType, type, children, loading, onClick }: ButtonProps) {
  return (
    <Button htmlType={htmlType} loading={loading} className='h-[50px] flex flex-1 items-center justify-center rounded-md text-white text-lg bg-[#B323CF] lg:flex-initial' type={type} onClick={onClick}>{children}</Button>
  )
}
