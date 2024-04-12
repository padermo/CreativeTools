import { useState, useEffect } from 'react';
import { Tag } from 'antd';
import { useItems } from '@/context/ItemsContext';
import { subcategory } from '@/utils/dataSend';
import { useTranslations } from 'next-intl';
import ConfigThemeAnt from '@/components/parentComponents/ConfigThemeAnt';

// type
import type { SelectOption } from '@/components/reusable/types';
import type { SubcategoryKeys } from '@/types/generals.types';

export default function Subcategory() {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [tagData, setTagData] = useState<[SelectOption]>([{value:'', label:''}]);
  const { selectedCategory, setSelectedSubcategory } = useItems();
  const t = useTranslations('Tools');

  const handleChangeTag = (tag:string, checked:boolean) => {
    setSelectedTag(checked ? tag : '');
    setSelectedSubcategory(checked ? tag : '');
  };

  useEffect(() => {
    if(selectedCategory){
      setTagData(t(`subcategories.${selectedCategory}`).split(',').map((value, index) => {return {value:subcategory[selectedCategory as SubcategoryKeys][index], label:value}}) as [SelectOption])
    }
  },[selectedCategory, t])

  if(selectedCategory){
    return (
      <div className='flex items-center gap-1 flex-wrap'>
        <span className='text-[#222] text-sm font-medium dark:text-white'>{t('sections.subcategory')}:</span>
        <ConfigThemeAnt>
          {tagData &&
            tagData.map((tag, index) => (
              <Tag.CheckableTag
                key={index}
                checked={selectedTag.includes(tag.value)}
                onChange={(checked) => handleChangeTag(tag.value, checked)}
                className='cursor-pointer text-[#222] font-medium text-sm dark:text-white'
              >
                {tag.label}
              </Tag.CheckableTag>
            ))}
        </ConfigThemeAnt>
      </div>
    );
  }

  return null;
}
