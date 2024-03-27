import { useState } from 'react';
import { Tag } from 'antd';
import ConfigThemeAnt from '@/components/parentComponents/ConfigThemeAnt';

// type
import type { SubcategoryProps } from '@/types/generals.types';

export default function Subcategory({
  subcategory,
  handleSubcategory,
}: SubcategoryProps) {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const tagsData = subcategory;

  const handleChangeTag = (tag:string, checked:boolean) => {
    setSelectedTag(checked ? tag : '');
  };
  return (
    <div className='flex items-center gap-1 flex-wrap'>
      <ConfigThemeAnt>
        {tagsData &&
          tagsData.map((tag, index) => (
            <Tag.CheckableTag
              key={index}
              checked={selectedTag.includes(tag)}
              onChange={(checked) => handleChangeTag(tag, checked)}
              onClick={() => handleSubcategory(index)}
              className='cursor-pointer text-[#222] dark:text-white'
            >
              {tag}
            </Tag.CheckableTag>
          ))}
      </ConfigThemeAnt>
    </div>
  );
}
