import Score from './options/Score';
import StatusFree from './options/StatusFree';
import Report from './options/Report';
import Favorite from './options/Favorite';
import { useTranslations } from 'next-intl';

// type
import type { StateItems } from '@/types/context.types';

export default function Card({_id, name, url, category, subcategory, score, liked, isFree}:StateItems) {
  const t = useTranslations('Tools');
  return (
    <div className='w-60 h-60 rounded-md shadow-md flex flex-col items-center justify-between text-[#222] bg-gray-100 p-4 dark:text-white dark:bg-[#444]'>
      <div className='w-full flex justify-end items-center'>
        <Report _id={_id} name={name}/>
      </div>
      <div className='w-full h-4/5 flex flex-col gap-4 items-center justify-center'>
        <h3
          onClick={() => window.open(url)}
          className='font-semibold text-lg cursor-pointer hover:underline'
        >
          {name.toUpperCase()}
        </h3>
      </div>
      <div className='w-full flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          {/* <Favorite handleFavorite={handleFavorite} itemId={_id} /> */}
          {/* <Score
            score={score}
            liked={liked}
            itemId={_id}
            handleScore={handleScore}
          /> */}
        </div>
        <StatusFree
          isFree={isFree}
          free={t('accessType').split(',')[0]}
          pay={t('accessType').split(',')[1]}
        />
      </div>
    </div>
  );
}
