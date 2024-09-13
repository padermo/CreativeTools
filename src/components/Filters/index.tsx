"use client";
import Category from "./Category";
import Subcategory from "./SubCategory";
import SubFilter from "./SubFilters/SubFilter";

export default function Filters() {
  return (
    <div className="w-full outline outline-green-300 flex flex-col gap-2">
      <Category />
      <SubFilter />
      <Subcategory />
    </div>
  );
}
