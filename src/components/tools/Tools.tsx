'use client';
import { useEffect, useState } from 'react';
import axiosConfig from '@/axios/axiosconfig';
import { useItems } from '@/context/ItemsContext';
import Pages from '../pagination/Pages';
import Card from '../card/Card';
import Filters from '../filters/Filters';
import CardSkeleton from '../fallbacks/CardSkeleton';
import ReportModal from '../modals/ReportModal';
import NotData from '../svg/NotData';

// types
import type { DataReportItem } from '@/types/generals.types';

export default function Tools() {
  const [selectCategory, setSelectCategory] = useState<string>('')
  const [selectSubcategory, setSelectSubcategory] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [accessType, setAccessType] = useState<boolean|undefined>(undefined)
  const [isViewModal, setIsViewModal] = useState<boolean>(false)
  const [dataReportItem, setDataReportItem] = useState<DataReportItem>({id:'',name:''})
  const { setItems, setPages, setCategory, getFavorites, pages, items, token, userId } = useItems();

  const handleScore = async (itemId:string) => {
    if(itemId && userId){
      const response = await axiosConfig.put('/item', {itemId, userId}, {headers: {'Authorization': `Bearer ${token}`}})
      if(response.status === 200){
        getItems()
      }
    }
  }

  const handleFavorite = async (itemId:string) => {
    if(itemId && userId){
      const response = await axiosConfig.post('/favorite', {itemId, userId}, {headers: {'Authorization': `Bearer ${token}`}})
      if(response.status === 200){
        getFavorites()
      }
    }
  }

  const handleModal = (id:string, name:string) => {
    setIsViewModal(!isViewModal)
    if(id !== undefined && name !== undefined){
      setDataReportItem({id:id,name:name})
    }
  }

  const getItems = async () => {
    const resItems = await axiosConfig.get(`/item?category=${selectCategory}&subcategory=${selectSubcategory}${accessType !== undefined ? `&type=${accessType}`:undefined}&page=${currentPage}`);
    setItems(resItems.data.items);
    setPages(resItems.data.config);
  };

  const getCategory = async () => {
    const resCategory = await axiosConfig.get('/category')
    setCategory(resCategory.data);
  }

  useEffect(() => {
    getCategory()
  },[])

  useEffect(() => {
    getItems();
  }, [selectCategory, selectSubcategory, currentPage, accessType]);

  if(!items){
    return <CardSkeleton/>
  }

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
              handleScore={handleScore}
              handleFavorite={handleFavorite}
              handleModal={handleModal}
            />
        ))}
        {items.length <= 0 && <NotData/>}
      </div>
      <Pages totalItems={pages?.totalItems} totalPages={pages?.totalPages} setCurrentPage={setCurrentPage} />
      <ReportModal isViewModal={isViewModal} handleModal={handleModal} id={dataReportItem.id} name={dataReportItem.name}/>
    </div>
  );
}
