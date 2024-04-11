'use client'
import { useItems } from '@/context/ItemsContext'
import Card from './Card';

export default function Cards(){
  const { items } = useItems();

  return (
    <div className='w-full flex flex-wrap gap-5 flex-1'>
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