import { Pagination } from 'antd';
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt';

// types
import type { Pages } from '@/types/generals.types';

export default function Pages({totalItems, totalPages, setCurrentPage}:Pages){
  const handleChangePage = (current:number) => {
    setCurrentPage(current)
  }
  return (
    <ConfigThemeAnt>
      <Pagination defaultCurrent={totalPages} total={totalItems} onChange={(current)=>handleChangePage(current)}/>
    </ConfigThemeAnt>
  )
}