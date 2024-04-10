'use client'
import { useState } from 'react'
import Card from '../card/Card'
import { useItems } from '@/context/ItemsContext'
import NotData from '../svg/NotData'
import axiosConfig from '@/axios/axiosconfig'

// types
import type { DataReportItem } from '@/types/generals.types'

export default function Favorites(){
  const [isViewModal, setIsViewModal] = useState<boolean>(false)
  const [dataReportItem, setDataReportItem] = useState<DataReportItem>({id:'',name:''})
  const { favoriteItems, userId, token, getFavorites } = useItems();

  const handleScore = async (itemId:string) => {
    if(itemId && userId){
      const response = await axiosConfig.put('/item', {itemId, userId}, {headers: {'Authorization': `Bearer ${token}`}})
      // if(response.status === 200){
      //   getItems()
      // }
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

  return(
    <div className='flex flex-col w-full min-h-dvh max-h-full gap-4 justify-center items-center py-8'>
      <div className='w-full flex flex-wrap gap-5 flex-1' style={{justifyContent: favoriteItems !== undefined && favoriteItems.length > 2 ? 'space-between' : 'normal'}}>
        {favoriteItems &&
          favoriteItems.map((item) => (
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
        {!favoriteItems && <NotData/>}
      </div>
    </div>
  )
}