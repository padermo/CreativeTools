'use client'
import { MoreOutlined } from '@ant-design/icons';
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt';
import { Tooltip, Dropdown } from 'antd';

// types
import type { OptionsProps } from '@/types/generals.types';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export default function Options({favorite,report,tooltip}:OptionsProps){

  const items:MenuItem[] = [
    {
      key: '1',
      label: (
        <p className='font-light text-[#222] dark:text-white'>{favorite}</p>
      )
    },
    {
      key: '2',
      label: (
        <p className='font-light text-[#222] dark:text-white'>{report}</p>
      )
    }
  ]

  return (
    <ConfigThemeAnt>
      <Dropdown menu={{items}} placement='bottomCenter' arrow={{ pointAtCenter: true }}>
        <Tooltip title={tooltip}>
          <MoreOutlined className='text-[#222] cursor-pointer dark:text-white'/>
        </Tooltip>
      </Dropdown>
    </ConfigThemeAnt>
  )
}