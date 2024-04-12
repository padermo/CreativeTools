import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useItems } from '@/context/ItemsContext';
import { liked, accessType } from '@/utils/dataSend';
import SubFilters from './SubFilters';

// types
import type { SelectOption } from '@/components/reusable/types';

export default function SubFilter(){
  const [likedData, setLikedData] = useState<[SelectOption]>([{value:'',label:''}])
  const [accessTypeData, setAccessTypeData] = useState<[SelectOption]>([{value:'',label:''}])
  const t = useTranslations('Tools');
  const { setSelectedAccessType, setSelectedLiked } = useItems();

  useEffect(() => {
    setAccessTypeData(t('accessType').split(',').map((value, index) => {return {value:accessType[index], label:value}}) as [SelectOption]);
    setLikedData(t('liked').split(',').map((value, index) => {return {value:liked[index], label:value}}) as [SelectOption])
  }, [t])

  return(
    <div className='w-full flex justify-start gap-2'>
      <SubFilters title={t('sections.accessType')} tagsData={accessTypeData} onClick={setSelectedAccessType}/>
      <SubFilters title={t('sections.liked')} tagsData={likedData} onClick={setSelectedLiked}/>
    </div>
  )
}