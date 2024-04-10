'use client'
import Category from './category/Category';
import CreateItemButton from '../items/create/CreateItemButton';
import Subcategory from './subcategory/Subcategory';
import SubFilter from './subFilters/SubFilter';

export default function   Filters(){
  return(
    <div className='w-full flex flex-col gap-2'>
      <div className='flex items-center gap-3'>
        <Category/>
        <CreateItemButton/>
      </div>
      <SubFilter/>
      <Subcategory/>
    </div>
  )
}