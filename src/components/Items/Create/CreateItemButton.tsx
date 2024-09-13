'use client'
import { PlusOutlined } from '@ant-design/icons';
import { useModal } from '@/context/ModalContext';
import { useSession } from 'next-auth/react'
import ButtonReusable from '@/components/Reusable/Button';

export default function CreateItemButton() {
  const { handleModal } = useModal();
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <ButtonReusable icon={<PlusOutlined />} htmlType='button' onClick={() => handleModal('create')} type='primary' />
    )
  }

  return null;
}
