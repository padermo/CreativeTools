import { Pagination } from 'antd';
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt';

// types
import type { Pages } from '@/types/generals.types';

export default function Pages({totalItems, totalPages}:Pages){
  return (
    <ConfigThemeAnt>
      <Pagination defaultCurrent={totalPages} total={totalItems}/>
    </ConfigThemeAnt>
  )
}