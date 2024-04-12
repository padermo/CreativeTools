'use client'
import { useState, useEffect } from 'react'
import { LikeOutlined, LikeFilled } from '@ant-design/icons'
import { useItems } from '@/context/ItemsContext'
import { useSession } from 'next-auth/react'
import { useAlert } from '@/context/AlertContext'
import { useTranslations } from 'next-intl'
import axiosConfig from '@/axios/axiosConfig'

// types
import type { ScoreProps } from '@/types/generals.types'

export default function Liked({score, liked, _id}:ScoreProps){
  const t = useTranslations('Tools')
  const [existsUser, setExistsUser] = useState<boolean>(false)
  const { userId, token, mutateItems } = useItems()
  const { status } = useSession()
  const { handleAlert } = useAlert()

  const handleScore = async () => {
    if(status === 'authenticated'){
      await axiosConfig.put('/item', {itemId:_id, userId}, {headers: {'Authorization': `Bearer ${token}`}});
      mutateItems()
    } else {
      handleAlert({type:'info', content: t('alerts.liked')})
    }
  }

  useEffect(() => {
    if(liked.includes(userId)){
      setExistsUser(true)
    } else {
      setExistsUser(false)
    }
  },[userId, liked])

  return (
    <>
      {
        existsUser ? 
        (
          <div className='flex items-center gap-1'>
            <button onClick={handleScore}>
              <LikeFilled className='text-cyan-600'/>
            </button>
            <span className='text-[#222] font-light dark:text-white'>{score}</span>
          </div>
        )
        :
        (
          <button onClick={handleScore}>
            <LikeOutlined className='text-[#a1a1a1] transition-colors duration-300 ease-in-out dark:text-white hover:text-cyan-600 dark:hover:text-cyan-600'/>
          </button>
        )
      }
    </>
  )
}