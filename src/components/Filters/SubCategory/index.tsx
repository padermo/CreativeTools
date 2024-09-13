import { useState, useEffect } from 'react';
import { Tag } from 'antd';
import { useItems } from '@/context/ItemsContext';
import { subcategory } from '@/utils/dataSend';
import { useTranslations } from 'next-intl';

// type
import type { SelectOption } from '@/components/Reusable/types';
import type { SubcategoryKeys } from '@/types/generals.types';

export default function Subcategory() {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [tagData, setTagData] = useState<[SelectOption]>([{ value: '', label: '' }]);
  const { selectedCategory, setSelectedSubcategory } = useItems();
  const t = useTranslations('Tools');

  const handleChangeTag = (tag: string, checked: boolean) => {
    setSelectedTag(checked ? tag : '');
    setSelectedSubcategory(checked ? tag : '');
  };

  useEffect(() => {
    if (selectedCategory) {
      setTagData(t(`subcategories.${selectedCategory}`).split(',').map((value, index) => { return { value: subcategory[selectedCategory as SubcategoryKeys][index], label: value } }) as [SelectOption])
    }
  }, [selectedCategory, t])

  if (selectedCategory) {
    return (
      <div className='flex items-center gap-1 flex-wrap'>
        <span className='text-sm font-medium'>{t('sections.subcategory')}:</span>
        {tagData &&
          tagData.map((tag, index) => (
            <Tag.CheckableTag
              key={index}
              checked={selectedTag.includes(tag.value)}
              onChange={(checked) => handleChangeTag(tag.value, checked)}
              className='cursor-pointer font-medium text-sm'
            >
              {tag.label}
            </Tag.CheckableTag>
          ))}
      </div>
    );
  }

  return null;
}
