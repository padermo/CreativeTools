'use client'
import { useState, useEffect } from 'react'
import { LikeOutlined, LikeFilled } from '@ant-design/icons'
import { useItems } from '@/context/ItemsContext'

// types
import type { ScoreProps } from '@/types/generals.types'

export default function Liked({score, liked, itemId, handleScore}:ScoreProps){
  const { userId } = useItems()
  const [existsUser, setExistsUser] = useState<boolean>(false)

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
            <button onClick={() => handleScore(itemId)}>
              <LikeFilled className='text-cyan-600'/>
            </button>
            <span className='text-[#222] font-light dark:text-white'>{score}</span>
          </div>
        )
        :
        (
          <button onClick={() => handleScore(itemId)}>
            <LikeOutlined className='text-[#a1a1a1] dark:text-white hover:text-cyan-600'/>
          </button>
        )
      }
    </>
  )
}