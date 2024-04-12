'use client'
import { Select } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt'

// types
import type { SelectReusableProps } from './types'

export default function SelectReusable({id, value, options, placeholder, onChange}:SelectReusableProps){

  return(
    <ConfigThemeAnt>
      <Select id={id} suffixIcon={<DownOutlined className='text-[#a1a1a1] dark:text-white'/>} options={options} onChange={onChange} placeholder={placeholder} popupClassName='bg-white text-[#222] dark:bg-[#444] dark:text-white' className='w-full'/>
    </ConfigThemeAnt>
  )
}