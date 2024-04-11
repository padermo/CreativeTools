'use client';
import Filters from '../filters/Filters';
import Cards from '../items/card/Cards';
import Pages from '../pagination/Pages';

export default function Tools() {
  return (
    <div className='flex flex-col w-full min-h-dvh max-h-full gap-4 justify-center items-center py-8'>
      <Filters/>
      <Cards/>
      <Pages/>
    </div>
  );
}
