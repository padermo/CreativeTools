'use client'
import { createContext, useContext } from 'react'
import { message } from 'antd'

// types
import type { Children } from '@/types/generals.types';
import type { MessageAlert, AlertContextValues } from '@/types/context.types';

export const AlertContext = createContext({} as AlertContextValues);

export default function AlertProvider({children}:Children){
  const [messageApi, contextHolder] = message.useMessage()
  
  const handleAlert = ({type, content}:MessageAlert) => {
    messageApi.open({type,content})
  }

  return <AlertContext.Provider value={{contextHolder, handleAlert}}>{children}</AlertContext.Provider>
}

export const useAlert = () => {
  return useContext(AlertContext)
}