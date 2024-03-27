'use client';
import { useEffect, useState } from 'react';
import axiosConfig from '@/axios/axiosconfig';
import { useItems } from '@/context/ItemsContext';
import Pages from '../pagination/Pages';
import Card from '../card/Card';
import Filters from '../filters/Filters';

export default function Tools() {
  const [selectCategory, setSelectCategory] = useState<string>('')
  const [selectSubcategory, setSelectSubcategory] = useState<string>('')
  const { setItems, setPages, setCategory, pages, items } = useItems();

  useEffect(() => {
    const getData = async () => {
      const resItems = await axiosConfig.get(`/item/${selectCategory}/${selectSubcategory}`);
      const resCategory = await axiosConfig.get('/category')
      setItems(resItems.data.items);
      setPages(resItems.data.config);
      setCategory(resCategory.data);
    };

    getData();
  }, [selectCategory, selectSubcategory]);

  return (
    <div className='flex flex-col w-full min-h-dvh max-h-full gap-4 justify-center items-center py-8'>
      <Filters setSelectCategory={setSelectCategory} setSelectSubcategory={setSelectSubcategory}/>
      <div className='flex flex-wrap justify-between gap-5'>
        {items &&
          items.map((item) => (
            <Card
              key={item._id}
              name={item.name}
              url={item.url}
              _id={item._id}
              category={item.category}
              subcategory={item.subcategory}
              score={item.score}
              isFree={item.isFree}
              createDate={item.createDate}
            />
          ))}
      </div>
      <Pages totalItems={pages?.totalItems} totalPages={pages?.totalPages} />
    </div>
  );
}
