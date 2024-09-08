'use client';
import { useAlert } from '@/context/AlertContext';
import Filters from '../Filters';
import Cards from '../items/card/Cards';
import Pages from '../Pagination';

export default function Tools() {
  const { contextHolder } = useAlert()
  return (
    <div className='flex flex-col w-full min-h-dvh max-h-full gap-4 justify-center items-center py-20 lg:py-8'>
      <Filters />
      {/*<Cards />*/}
      <Pages />
      {contextHolder}
    </div>
  );
}
