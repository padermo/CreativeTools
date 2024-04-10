'use client';
import FormCard from './FormCard';
import { CloseOutlined } from '@ant-design/icons';
import { useTranslations } from 'next-intl';
import { useModal } from '@/context/ModalContext';

export default function CreateModal() {
  const { handleModal, isOpenModalCreate } = useModal();
  const t = useTranslations('CreateItem');
  
  if (isOpenModalCreate) {
    return (
      <div className='w-full h-dvh flex flex-col justify-center items-center fixed top-0 left-0 z-20 bg-neutral-800/20'>
        <div className='rounded-lg shadow-xl w-[90%] bg-gray-100 p-3 flex flex-col gap-2 justify-center dark:bg-[#555] md:w-1/2 lg:w-2/6'>
          <div className='flex justify-end'>
            <CloseOutlined
              onClick={() => handleModal('create')}
              className='text-[#a1a1a1] dark:text-white hover:text-red-600'
            />
          </div>
          <p className='text-lg font-semibold text-center text-[#222] dark:text-white'>
            {t('title')}
          </p>
          <FormCard handleModal={handleModal} />
        </div>
      </div>
    );
  }

  return null;
}
