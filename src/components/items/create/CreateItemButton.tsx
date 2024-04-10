'use client'
import { PlusOutlined } from '@ant-design/icons';
import { useModal } from '@/context/ModalContext';
import { useSession } from 'next-auth/react'
import ButtonReusable from '@/components/reusable/ButtonReusable';

export default function CreateItemButton(){
  const { handleModal } = useModal();
  const { status } = useSession();

  if(status === 'authenticated'){
    return (
      <ButtonReusable loading={false} onClick={() => handleModal('create')} type='primary'>
        <PlusOutlined className='text-white'/>
      </ButtonReusable>
    )
  }

  return null;
}