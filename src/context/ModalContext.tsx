'use client'
import { useContext, createContext, useState } from 'react'

// types
import type { Children } from '@/types/generals.types'
import type { ModalContextValues, TypeModal, SetDataReportModal } from '@/types/context.types'

export const ModalContext = createContext({
  isOpenModalCreate:false,
  isOpenModalReport:false,
  isOpenModalContact:false,
  dataReportModal: {_id:'', name:''},
  handleModal: () => {}
} as ModalContextValues)

export default function ModalProvider({children}:Children){
  const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
  const [isOpenModalReport, setIsOpenModalReport] = useState<boolean>(false);
  const [isOpenModalContact, seIsOpenModalContact] = useState<boolean>(false);
  const [dataReportModal, setDataReportModal] = useState<SetDataReportModal>({_id:'', name:''})

  const handleModal = (type:TypeModal, report?:SetDataReportModal) => {
    switch (type) {
      case 'create':
        return setIsOpenModalCreate(!isOpenModalCreate);
      case 'report':
        if(report){
          setIsOpenModalReport(!isOpenModalReport);
          setDataReportModal(report)
        }
        return;
      case 'contact':
        return seIsOpenModalContact(!isOpenModalContact);
      default:
        break;
    }
  }

  return <ModalContext.Provider value={{isOpenModalCreate, isOpenModalReport, isOpenModalContact, dataReportModal, handleModal}}>{children}</ModalContext.Provider>
}

export function useModal(){
  return useContext(ModalContext)
}