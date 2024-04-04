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
      <Pagination defaultCurrent={1} defaultPageSize={10} total={totalItems} onChange={(current)=>handleChangePage(current)}/>
    </ConfigThemeAnt>
  )
}