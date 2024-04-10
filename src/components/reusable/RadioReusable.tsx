'use client'
import { Radio } from 'antd'
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt'

// types
import type { RadioReusableProps } from './types'

export default function RadioReusable({children, onChange}:RadioReusableProps){
  return(
    <ConfigThemeAnt>
      <Radio.Group onChange={onChange}>
        {children}
      </Radio.Group>
    </ConfigThemeAnt>
  )
}