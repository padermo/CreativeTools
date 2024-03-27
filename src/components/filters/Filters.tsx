'use client'
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Category from './category/Category';
import Subcategory from './subcategory/Subcategory';
import { useItems } from '@/context/ItemsContext';

// types
import type { FilterProps } from '@/types/generals.types';

export default function Filters({setSelectCategory, setSelectSubcategory}:FilterProps){
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

  return(
    <div className='w-full flex flex-col gap-2'>
      <Category category={c('categories').split(',')} handleCategory={handleCategory}/>
      {category && <Subcategory subcategory={c(`subcategories.${category}`).split(',')} handleSubcategory={handleSubcategory}/>}
    </div>
  )
}