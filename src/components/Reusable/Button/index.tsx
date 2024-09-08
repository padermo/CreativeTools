import { Button } from 'antd';

// type
import type { ButtonProps } from '../types';

export default function ButtonReusable({ icon, text, htmlType, type, loading, onClick }: ButtonProps) {
  return (
    <Button icon={icon} htmlType={htmlType} loading={loading} type={type} onClick={onClick} className='flex flex-1 items-center justify-center rounded-md text-white text-lg bg-[#B323CF] lg:flex-initial'>
      {text}
    </Button>
  )
}
