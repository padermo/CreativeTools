'use client'
import { useItems } from '@/context/ItemsContext'
import Card from './Card';
import NotData from '@/components/svg/NotData';
import CardSkeleton from '@/components/fallbacks/CardSkeleton';

export default function Cards(){
  const { items, loadingItems } = useItems();

  if (loadingItems) return <CardSkeleton/>
  return (
    <div className='w-full flex flex-wrap justify-center gap-5 flex-1 md:justify-between lg:items-start lg:justify-between 2xl:items-center'>
      {!items.length && <NotData/>}
      {
        items && items.map(item => (
          <Card 
            key={item._id}
            _id={item._id}
            name={item.name}
            url={item.url}
            category={item.category}
            subcategory={item.subcategory}
            liked={item.liked}
            score={item.score}
            isFree={item.isFree}
          />
        ))
      }
    </div>
  )
}