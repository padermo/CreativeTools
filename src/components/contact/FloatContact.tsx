'use client';
import { useState } from 'react';
import { FloatButton } from 'antd';
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt';
import { MessageOutlined } from '@ant-design/icons';
import { useTranslations } from 'next-intl';
import ContactModal from '../modals/ContactModal';

export default function FloatContact() {
  const [isViewModal, setIsViewModal] = useState<boolean>(false);
  const t = useTranslations('Contact');

  const handleModal = () => {
    setIsViewModal(!isViewModal)
  }
  return (
    <>
      <ConfigThemeAnt>
        <FloatButton
          shape='circle'
          type='primary'
          style={{ right: 20, bottom: 20 }}
          tooltip={t('tooltip')}
          icon={<MessageOutlined className='text-[#222] dark:text-white' />}
          onClick={handleModal}
        />
      </ConfigThemeAnt>
      <ContactModal handleModal={handleModal} isViewModal={isViewModal}/>
    </>
  );
}
