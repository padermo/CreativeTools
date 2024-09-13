'use client'
import { ExclamationOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import { useTranslations } from 'next-intl'
import { useModal } from '@/context/ModalContext'

// types
import type { ReportProps } from '../../items.types'

export default function Report({ _id, name }: ReportProps) {
  const { handleModal } = useModal();
  const t = useTranslations('Report')
  return (
    <Tooltip title={t('tooltip')}>
      <button onClick={() => handleModal('report', { _id, name })} className='text-[#888] transition-colors duration-300 ease-in-out hover:text-white'>
        <ExclamationOutlined />
      </button>
    </Tooltip>
  )
}
