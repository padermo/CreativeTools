'use client'
import { useContext, createContext, useState } from 'react'

// types
import type { Children } from '@/types/generals.types'
import type { ModalContextValues, TypeModal } from '@/types/context.types'

export const ModalContext = createContext({
  isOpenModalCreate:false,
  isOpenModalReport:false,
  isOpenModalContact:false,
  handleModal: () => {}
} as ModalContextValues)

export default function ModalProvider({children}:Children){
  const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
  const [isOpenModalReport, setIsOpenModalReport] = useState<boolean>(false);
  const [isOpenModalContact, seIsOpenModalContact] = useState<boolean>(false);

  const handleModal = (type:TypeModal) => {
    switch (type) {
      case 'create':
        return setIsOpenModalCreate(!isOpenModalCreate);
      case 'report':
        return setIsOpenModalReport(!isOpenModalReport);
      case 'contact':
        return seIsOpenModalContact(!isOpenModalContact);
      default:
        break;
    }
  }

  return <ModalContext.Provider value={{isOpenModalCreate, isOpenModalReport, isOpenModalContact, handleModal}}>{children}</ModalContext.Provider>
}

export function useModal(){
  return useContext(ModalContext)
}