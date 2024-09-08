'use client';
import { FloatButton } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { useTranslations } from 'next-intl';
import { useModal } from '@/context/ModalContext';
import ContactModal from '@/components/Modals/ContactModal';

export default function FloatContact() {
  const { handleModal } = useModal()
  const t = useTranslations('Contact');
  return (
    <>
      <FloatButton
        shape='circle'
        type='primary'
        style={{ right: 20, bottom: 20 }}
        tooltip={t('tooltip')}
        icon={<MessageOutlined />}
        onClick={() => handleModal('contact')}
      />
      <ContactModal />
    </>
  );
}
