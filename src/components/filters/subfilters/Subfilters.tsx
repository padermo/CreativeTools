import { useState } from 'react';
import { Tag } from 'antd';
import ConfigThemeAnt from '@/components/parentComponents/ConfigThemeAnt';

// type
import type { SubfiltersProps } from '@/types/generals.types';

export default function Subfilters({
  title,
  optionOne,
  optionTwo,
  onClick,
}: SubfiltersProps) {
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
        <Tag.CheckableTag
          checked={selectedTag.includes(optionOne)}
          onChange={(checked) => handleChangeTag(optionOne, checked)}
          onClick={() => onClick(true)}
          className='cursor-pointer text-[#222] font-light dark:text-white'
        >
          {optionOne}
        </Tag.CheckableTag>
        <Tag.CheckableTag
          checked={selectedTag.includes(optionTwo)}
          onChange={(checked) => handleChangeTag(optionTwo, checked)}
          onClick={() => onClick(false)}
          className='cursor-pointer text-[#222] font-light dark:text-white'
        >
          {optionTwo}
        </Tag.CheckableTag>
      </ConfigThemeAnt>
    </div>
  );
}
