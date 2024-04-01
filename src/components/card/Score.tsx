import { useState, useEffect } from 'react'
import { LikeOutlined, LikeFilled } from '@ant-design/icons'
import axiosConfig from '@/axios/axiosconfig'

import type { ScoreProps } from '@/types/generals.types'

export default function Liked({score, liked}:ScoreProps){
  const [existsUser, setExistsUser] = useState<boolean>(false)

  useEffect(() => {

  },[])

  return (
    <>

    </>
  )
}