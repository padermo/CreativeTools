'use client'
import { CloseOutlined } from '@ant-design/icons'
import { useModal } from '@/context/ModalContext'
import FormReport from './Forms/FormReport'

export default function ReportModal() {
  const { isOpenModalReport, dataReportModal, handleModal } = useModal();

  if (isOpenModalReport) {
    return (
      <div className='w-full h-dvh flex flex-col justify-center items-center fixed top-0 left-0 z-20'>
        <div className='rounded-md shadow-xl border border-neutral-800 w-[90%] bg-[#111] p-3 flex flex-col gap-2 justify-center md:w-1/2 lg:w-2/6'>
          <div className='flex justify-end'>
            <CloseOutlined onClick={() => handleModal('report', { _id: '', name: '' })} className='hover:text-red-500' />
          </div>
          <p className='text-lg font-semibold text-center'>{dataReportModal.name.toUpperCase()}</p>
          <FormReport _id={dataReportModal._id} name={dataReportModal.name} handleModal={handleModal} />
        </div>
      </div>
    )
  }

  return null;
}
