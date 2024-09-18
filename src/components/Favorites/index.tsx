"use client";
import { useItems } from "@/context/ItemsContext";
import Card from "../Items/Card/Card";
import NotData from "../SVG/NotData";
import CardSkeleton from "../Skeleton";
export default function Favorites() {
  const { favoriteItems, loadingFavorites } = useItems();

  if (loadingFavorites) return <CardSkeleton />;
  return (
    <div className="flex flex-col w-full min-h-dvh max-h-full gap-4 justify-center items-center py-20 lg:py-8 lg:mt-14">
      <div className="w-full h-full flex-1 grid justify-center grid-rows-* md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-4 gap-5">
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
