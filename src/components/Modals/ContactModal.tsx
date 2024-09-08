'use client';
import { CloseOutlined } from '@ant-design/icons';
import FormContact from './Forms/FormContact';
import { useTranslations } from 'next-intl';
import { useModal } from '@/context/ModalContext';

export default function ContactModal() {
  const { isOpenModalContact, handleModal } = useModal();
  const t = useTranslations('Contact');

  if (isOpenModalContact) {
    return (
      <div className='w-full h-dvh flex flex-col justify-center items-center fixed top-0 z-20'>
        <div className='rounded-md border border-neutral-800 shadow-xl w-[90%] bg-[#111] p-3 flex flex-col gap-2 justify-center md:w-1/2 lg:w-2/6'>
          <div className='flex justify-end'>
            <CloseOutlined
              onClick={() => handleModal('contact')}
              className='hover:text-red-500'
            />
          </div>
          <p className='text-lg font-semibold text-center'>{t('title')}</p>
          <FormContact handleModal={handleModal} />
        </div>
      </div>
    );
  }

  return null;
}
