'use client'
import { useState, useEffect } from 'react'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import { useItems } from '@/context/ItemsContext'
import { useSession } from 'next-auth/react'
import { useAlert } from '@/context/AlertContext'
import { useTranslations } from 'next-intl'
import axiosConfig from '@/axios/axiosConfig'

// types
import type { FavoriteProps } from '@/types/generals.types'

export default function Favorite({_id}:FavoriteProps){
  const t = useTranslations('Tools')
  const { favoriteItems, token, userId, mutateFavorite } = useItems()
  const { status } = useSession()
  const { handleAlert } = useAlert()
  const [existsUser, setExistsUser] = useState<boolean>(false)

  const handleFavorite = async () => {
    if(status === 'authenticated'){
      await axiosConfig.post('/favorite', {itemId:_id, userId}, {headers: {'Authorization': `Bearer ${token}`}})
      mutateFavorite()
    } else {
      handleAlert({type:'info', content: t('alerts.favorites')})
    }
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
            <HeartOutlined className='text-[#a1a1a1] transition-colors duration-300 ease-in-out dark:text-white hover:text-red-600 dark:hover:text-red-600'/>
          </button>
        )
      }
    </>
  )
}