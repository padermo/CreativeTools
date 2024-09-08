'use client'
import { useItems } from '@/context/ItemsContext'
import { useTranslations } from 'next-intl';
import ButtonReusable from '@/components/Reusable/Button'

export default function Clear(){
  const { getAllItems } = useItems();
  const t = useTranslations('Tools')

  return <ButtonReusable text={t('all')} htmlType='button' type='primary' onClick={getAllItems}/>
}
