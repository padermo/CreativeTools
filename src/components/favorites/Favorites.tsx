'use client';
import { useItems } from '@/context/ItemsContext';
import Card from '../Items/Card/Card';
import NotData from '../SVG/NotData';
import CardSkeleton from '../Fallbacks/CardSkeleton';
export default function Favorites() {
  const { favoriteItems, loadingFavorites } = useItems();

  if (loadingFavorites) return <CardSkeleton />
  return (
    <div className='flex flex-col w-full min-h-dvh max-h-full gap-4 justify-center items-center py-20 lg:py-8'>
      <div className='w-full flex flex-wrap gap-5 flex-1 justify-center md:justify-start lg:justify-start'>
        {!favoriteItems.length && <NotData />}
        {favoriteItems &&
          favoriteItems.map((item) => (
            <Card
              key={item._id}
              _id={item._id}
              name={item.name}
              url={item.url}
              liked={item.liked}
              score={item.score}
              isFree={item.isFree}
            />
          ))}
      </div>
    </div>
  );
}
