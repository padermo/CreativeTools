'use client'
import { useState, useEffect } from 'react'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import { useItems } from '@/context/ItemsContext'

// types
import type { FavoriteProps } from '@/types/generals.types'

export default function Favorite({itemId, handleFavorite}:FavoriteProps){
  const { favoriteItems } = useItems()
  const [existsUser, setExistsUser] = useState<boolean>(false)

  useEffect(() => {
    if(favoriteItems?.map(item => item._id).includes(itemId)){
      setExistsUser(true)
    } else {
      setExistsUser(false)
    }
  },[favoriteItems, itemId])

  return (
    <>
      {
        existsUser ? 
        (
          <button onClick={() => handleFavorite(itemId)}>
            <HeartFilled className='text-red-600'/>
          </button>
        )
        :
        (
          <button onClick={() => handleFavorite(itemId)}>
            <HeartOutlined className='text-[#a1a1a1] dark:text-white hover:text-red-600'/>
          </button>
        )
      }
    </>
  )
}