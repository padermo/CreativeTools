'use client'
import { Select } from 'antd'
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt'

// types
import type { SelectReusableProps } from './types'

export default function SelectReusable({id, value, options, placeholder, onChange}:SelectReusableProps){

  return(
    <ConfigThemeAnt>
      <Select id={id} options={options} onChange={onChange} placeholder={placeholder} className='w-full text-[#222] dark:text-white dark:placeholder:text-gray-400'/>
    </ConfigThemeAnt>
  )
}