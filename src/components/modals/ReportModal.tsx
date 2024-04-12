'use client'
import { CloseOutlined } from '@ant-design/icons'
import { useModal } from '@/context/ModalContext'
import FormReport from './forms/FormReport'

export default function ReportModal(){
  const { isOpenModalReport, dataReportModal, handleModal } = useModal();  
  
  if(isOpenModalReport){
    return(
      <div className='w-full h-dvh flex flex-col justify-center items-center fixed top-0 left-0 z-20 bg-neutral-800/20'>
        <div className='rounded-lg shadow-xl w-[90%] bg-gray-100 p-3 flex flex-col gap-2 justify-center dark:bg-[#555] md:w-1/2 lg:w-2/6'>
          <div className='flex justify-end'>
            <CloseOutlined onClick={() => handleModal('report', {_id:'', name:''})} className='text-[#a1a1a1] dark:text-white hover:text-red-600'/>
          </div>
          <p className='text-lg font-semibold text-center text-[#222] dark:text-white'>{dataReportModal.name.toUpperCase()}</p>
          <FormReport _id={dataReportModal._id} name={dataReportModal.name} handleModal={handleModal}/>
        </div>
      </div>
    )
  }

  return null;
}