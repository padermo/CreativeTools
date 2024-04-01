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
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [accessType, setAccessType] = useState<boolean|undefined>(undefined)
  const { setItems, setPages, setCategory, pages, items } = useItems();

  useEffect(() => {
    let newAccessType = accessType !== undefined && accessType;
    const getData = async () => {
      const resItems = await axiosConfig.get(`/item?category=${selectCategory}&subcategory=${selectSubcategory}&type=${newAccessType}&page=${currentPage}`);
      const resCategory = await axiosConfig.get('/category')
      setItems(resItems.data.items);
      setPages(resItems.data.config);
      setCategory(resCategory.data);
    };

    getData();
  }, [selectCategory, selectSubcategory, currentPage, accessType]);

  return (
    <div className='flex flex-col w-full min-h-dvh max-h-full gap-4 justify-center items-center py-8'>
      <Filters setSelectCategory={setSelectCategory} setSelectSubcategory={setSelectSubcategory} setAccessType={setAccessType}/>
      <div className='w-full flex flex-wrap gap-5 flex-1' style={{justifyContent: items !== undefined && items.length > 2 ? 'space-between' : 'normal'}}>
        {items &&
          items.map((item) => (
            <Card
              key={item._id}
              name={item.name}
              url={item.url}
              _id={item._id}
              category={item.category}
              subcategory={item.subcategory}
              liked={item.liked}
              score={item.score}
              isFree={item.isFree}
              createDate={item.createDate}
            />
          ))}
      </div>
      <Pages totalItems={pages?.totalItems} totalPages={pages?.totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
}
