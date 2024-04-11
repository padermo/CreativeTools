'use client'
import { useState, useEffect } from 'react'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import { useItems } from '@/context/ItemsContext'
import axiosConfig from '@/axios/axiosConfig'

// types
import type { FavoriteProps } from '@/types/generals.types'

export default function Favorite({_id}:FavoriteProps){
  const { favoriteItems, token, userId, mutateFavorite } = useItems()
  const [existsUser, setExistsUser] = useState<boolean>(false)

  const handleFavorite = async () => {
    await axiosConfig.post('/favorite', {itemId:_id, userId}, {headers: {'Authorization': `Bearer ${token}`}})
    mutateFavorite()
  }

  useEffect(() => {
    if(favoriteItems?.map(item => item._id).includes(_id)){
      setExistsUser(true)
    } else {
      setExistsUser(false)
    }
  },[favoriteItems, _id])

  return (
    <>
      {
        existsUser ? 
        (
          <button onClick={handleFavorite}>
            <HeartFilled className='text-red-600'/>
          </button>
        )
        :
        (
          <button onClick={handleFavorite}>
            <HeartOutlined className='text-[#a1a1a1] dark:text-white hover:text-red-600'/>
          </button>
        )
      }
    </>
  )
}