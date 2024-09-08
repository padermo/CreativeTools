import { useState } from 'react';
import { Tag } from 'antd';

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
    onClick(checked ? tag : '')
  };
  return (
    <div className='flex gap-1 flex-wrap'>
      <span className='text-sm font-medium'>
        {title}:
      </span>
      {
        tagsData && tagsData.map(tag => (
          <Tag.CheckableTag
            key={tag.value}
            checked={selectedTag.includes(tag.value)}
            onChange={(checked) => handleChangeTag(tag.value, checked)}
            className='cursor-pointer font-medium text-sm'
          >
            {tag.label}
          </Tag.CheckableTag>
        ))
      }
    </div>
  );
}
