'use client'
import { Pagination } from 'antd';
import { useItems } from '@/context/ItemsContext';

export default function Pages() {
  const { pages, setSelectedPage } = useItems();
  const handleChangePage = (current: number) => {
    setSelectedPage(current)
  }
  return (
    <Pagination defaultCurrent={1} defaultPageSize={10} total={pages.totalItems} showSizeChanger={false} onChange={(current) => handleChangePage(current)} />
  )
}
