import { useState } from 'react';
import { Tag } from 'antd';
import ConfigThemeAnt from '@/components/parentComponents/ConfigThemeAnt';

// type
import type { SubFiltersProps } from '@/types/generals.types';

export default function SubFilters({
  title,
  tagsData,
  onClick,
}: SubFiltersProps) {
  const [selectedTag, setSelectedTag] = useState<string>('');

  const handleChangeTag = (tag: string, checked: boolean) => {
    setSelectedTag(checked ? tag : '');
  };
  return (
    <div className='flex items-center gap-1 flex-wrap'>
      <span className='text-[#222] text-xs font-medium dark:text-white'>
        {title}:
      </span>
      <ConfigThemeAnt>
        {
          tagsData && tagsData.map(tag => (
            <Tag.CheckableTag
              key={tag.value}
              checked={selectedTag.includes(tag.value)}
              onChange={(checked) => handleChangeTag(tag.value, checked)}
              onClick={() => onClick(tag.value)}
              className='cursor-pointer text-[#222] font-light dark:text-white'
            >
              {tag.label}
            </Tag.CheckableTag>
          ))
        }
      </ConfigThemeAnt>
    </div>
  );
}
