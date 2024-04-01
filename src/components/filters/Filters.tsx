'use client'
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Category from './category/Category';
import Subcategory from './subcategory/Subcategory';
import Subfilters from './subfilters/Subfilters';
import { useItems } from '@/context/ItemsContext';

// types
import type { FilterProps } from '@/types/generals.types';

export default function Filters({setSelectCategory, setSelectSubcategory, setAccessType}:FilterProps){
  const { category:categories } = useItems()
  const [category, setCategory] = useState<string>('')
  const [categoryIndex, setCategoryIndex] = useState<number>(0)
  const c = useTranslations('Tools');

  const handleCategory = (index:number) => {
    setCategory(c('categories_click').split(',')[index])
    setCategoryIndex(index)
    if(categories){
      setSelectCategory(categories[index].category)
    }
  }

  const handleSubcategory = (index:number) => {
    if(categories){
      setSelectSubcategory(categories[categoryIndex].subcategories[index])
    }
  }

  const handleAccessType = (content:boolean) => {
    setAccessType(content)
  }

  return(
    <div className='w-full flex flex-col gap-2'>
      <Category category={c('categories').split(',')} handleCategory={handleCategory}/>
      <div className='flex items-center gap-2'>
        <Subfilters optionOne={c('liked.most')} optionTwo={c('liked.least')} title={c('sections.liked')} onClick={()=>{}}/>
        <Subfilters optionOne={c('accessType.pay')} optionTwo={c('accessType.free')} title={c('sections.accessType')} onClick={handleAccessType}/>
      </div>
      {category && <Subcategory list={c(`subcategories.${category}`).split(',')} title={c('sections.subcategory')} onClick={handleSubcategory}/>}
    </div>
  )
}