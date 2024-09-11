"use client";
import { useItems } from "@/context/ItemsContext";
import Card from "./Card";
import NotData from "@/components/SVG/NotData";
import CardSkeleton from "@/components/Skeleton";

export default function Cards() {
  const { items, loadingItems } = useItems();

  if (loadingItems) return <CardSkeleton />;
  return (
    <div className="w-full flex flex-wrap justify-center gap-5 flex-1 outline outline-red-300 2xl:items-center">
      {!items.length && <NotData />}
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
