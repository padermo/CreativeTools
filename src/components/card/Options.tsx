'use client'
import { ExclamationOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import { useTranslations } from 'next-intl'

// types
import type { OptionsProps } from '@/types/generals.types'

export default function Options({id, name, handleModal}:OptionsProps){
  const t = useTranslations('Report')
  return(
    <Tooltip title={t('tooltip')}>
      <button onClick={() => handleModal(id, name)}>
        <ExclamationOutlined className='text-[#a1a1a1] dark:text-white hover:text-red-600'/>
      </button>
    </Tooltip>
  )
}