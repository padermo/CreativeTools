import FormReport from './forms/FormReport'
import { CloseOutlined } from '@ant-design/icons'

// types
import type { ReportModalProps } from '@/types/generals.types'

export default function ReportModal({handleModal, isViewModal, id, name}:ReportModalProps){
  
  if(isViewModal){
    return(
      <div className='w-full h-dvh flex flex-col justify-center items-center fixed top-0 bg-neutral-800/20'>
        <div className='rounded-lg shadow-xl w-2/6 bg-gray-100 p-3 flex flex-col gap-2 justify-center dark:bg-[#555]'>
          <div className='flex justify-end'>
            <CloseOutlined onClick={() => handleModal(id='', name='')} className='text-[#a1a1a1] dark:text-white hover:text-red-600'/>
          </div>
          <p className='text-lg font-semibold text-center'>{name.toUpperCase()}</p>
          <FormReport id={id} name={name} handleModal={handleModal}/>
        </div>
      </div>
    )
  }

  return null;
}