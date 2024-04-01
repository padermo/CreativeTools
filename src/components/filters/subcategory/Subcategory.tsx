import { useState } from 'react';
import { Tag } from 'antd';
import ConfigThemeAnt from '@/components/parentComponents/ConfigThemeAnt';

// type
import type { SubcategoryProps } from '@/types/generals.types';

export default function Subcategory({
  title,
  list,
  onClick,
}: SubcategoryProps) {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const tagsData = list;

  const handleChangeTag = (tag:string, checked:boolean) => {
    setSelectedTag(checked ? tag : '');
  };
  return (
    <div className='flex items-center gap-1 flex-wrap'>
      <span className='text-[#222] text-xs font-medium dark:text-white'>{title}:</span>
      <ConfigThemeAnt>
        {tagsData &&
          tagsData.map((tag, index) => (
            <Tag.CheckableTag
              key={index}
              checked={selectedTag.includes(tag)}
              onChange={(checked) => handleChangeTag(tag, checked)}
              onClick={() => onClick(index)}
              className='cursor-pointer text-[#222] font-light dark:text-white'
            >
              {tag}
            </Tag.CheckableTag>
          ))}
      </ConfigThemeAnt>
    </div>
  );
}
