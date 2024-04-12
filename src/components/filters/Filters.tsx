'use client'
import Category from './category/Category';
import CreateItemButton from '../items/create/CreateItemButton';
import Subcategory from './subcategory/Subcategory';
import SubFilter from './subFilters/SubFilter';
import Clear from './clear/Clear';

export default function   Filters(){
  return(
    <div className='w-full flex flex-col gap-2'>
      <Category/>
      <SubFilter/>
      <Subcategory/>
    </div>
  )
}