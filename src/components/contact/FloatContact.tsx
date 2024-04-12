'use client';
import { FloatButton } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { useTranslations } from 'next-intl';
import { useModal } from '@/context/ModalContext';
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt';
import ContactModal from '../modals/ContactModal';

export default function FloatContact() {
  const { handleModal } = useModal()
  const t = useTranslations('Contact');
  return (
    <>
      <ConfigThemeAnt>
        <FloatButton
          shape='circle'
          type='primary'
          style={{ right: 20, bottom: 20 }}
          tooltip={t('tooltip')}
          icon={<MessageOutlined className='text-[#222] dark:text-white' />}
          onClick={() => handleModal('contact')}
        />
      </ConfigThemeAnt>
      <ContactModal/>
    </>
  );
}
