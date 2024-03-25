'use client'
import { ConfigProvider } from 'antd'
import type { Children } from '@/types/generals.types'

export default function ConfigThemeAnt({children}:Children){
  return(
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#B323CF',
            colorPrimaryActive: '#9337A5',
            colorPrimaryHover: '#D000FA',
            primaryShadow: 'none',
          }
        }
      }}
    >
      {children}
    </ConfigProvider>
  )
}