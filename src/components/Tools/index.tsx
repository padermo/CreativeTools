"use client";
import { useAlert } from "@/context/AlertContext";
import Filters from "../Filters";
import Cards from "../Items/Card/Cards";
import Pages from "../Pagination";

export default function Tools() {
  const { contextHolder } = useAlert();
  return (
    <div className="flex flex-col w-full min-h-screen max-h-full gap-4 justify-between items-center py-20 lg:py-8 lg:mt-14">
      <Filters />
      <Cards />
      <Pages />
      {contextHolder}
    </div>
  );
}
