'use client';
import { useItems } from '@/context/ItemsContext';
import Card from '../items/card/Card';
import NotData from '../svg/NotData';

export default function Favorites() {
  const { favoriteItems } = useItems();
  return (
    <div className='flex flex-col w-full min-h-dvh max-h-full gap-4 justify-center items-center py-8'>
      <div className='w-full flex flex-wrap gap-5 flex-1'>
        {!favoriteItems.length && <NotData />}
        {favoriteItems &&
          favoriteItems.map((item) => (
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
          ))}
      </div>
    </div>
  );
}
