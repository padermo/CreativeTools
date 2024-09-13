"use client";
import { useItems } from "@/context/ItemsContext";
import Card from "./Card";
import NotData from "@/components/SVG/NotData";
import CardSkeleton from "@/components/Skeleton";

export default function Cards() {
  const { items, loadingItems } = useItems();

  if (loadingItems) return <CardSkeleton />;
  if (!items.length) return <NotData />;
  return (
    <div className="w-full h-full flex-1 grid justify-center md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 xl:grid-cols-5 xl:grid-rows-2 2xl:grid-cols-4 2xl:grid-rows-3 gap-5">
      {items &&
        items.map((item) => (
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
  );
}
