import Score from './Score';
import StatusFree from './StatusFree';
import Options from './Options';
import { useTranslations } from 'next-intl';
// types
import type { Items } from '@/types/generals.types';

export default function Card({name, url, _id, category, createDate, isFree, score, liked, subcategory}:Items){
  const t = useTranslations('Tools')
  return (
    <div className='w-60 h-60 rounded-md shadow-md flex flex-col items-center justify-between text-[#222] bg-gray-100 p-4 dark:text-white'>
      <div className='w-full flex justify-end items-center'>
        {/* <Options favorite={t('cards.options.favorite')} report={t('cards.options.report')} tooltip={t('cards.options.tooltip')}/> */}
      </div>
      <div className='w-full h-4/5 flex flex-col gap-4 items-center justify-center'>
        <h3 onClick={()=> window.open(url)} className='font-semibold text-lg cursor-pointer hover:underline'>{name.toUpperCase()}</h3>
      </div>
      <div className='w-full flex justify-between items-center'>
        {/* <Score score={score} liked={liked}/> */}
        <StatusFree isFree={isFree} free={t('cards.status.free')} pay={t('cards.status.pay')}/>
      </div>
    </div>
  )
}