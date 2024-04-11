'use client'
import { useItems } from '@/context/ItemsContext'
import { useTranslations } from 'next-intl';
import ButtonReusable from '@/components/reusable/ButtonReusable'

export default function Clear(){
  const { getAllItems } = useItems();
  const t = useTranslations('Tools')

  return <ButtonReusable type='primary' loading={false} onClick={getAllItems}>{t('all')}</ButtonReusable>
}