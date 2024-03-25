'use client';
import { useState } from 'react';
import LinkReusable from '../reusable/LinkReusable';
import { Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import ButtonReusable from '../reusable/ButtonReusable';

// types
import type { NavbarProps } from '@/types/generals.types';

export default function NavbarMobile({texts}:NavbarProps){
  const [isView, setIsView] = useState<boolean>(false);

  const handleViewDrawer = () => {
    setIsView(!isView)
  }

  return(
    <nav className='absolute top-0 py-4 px-4 md:px-8 md:py-8 lg:hidden'>
      <ButtonReusable type='primary' onClick={handleViewDrawer}>
        <MenuOutlined/>
      </ButtonReusable>

      <Drawer
        style={{background: '#fff'}}
        width={200}
        className='text-[#222] text-xl dark:text-white'
        open={isView}
        closeIcon={<CloseOutlined className='text-[#222] dark:text-white'/>}
        onClose={handleViewDrawer}
        title={
          <div className='text-[#222] font-light text-lg dark:text-white'>
            <p>{texts('title')}</p>
          </div>
        }
        footer={
          <div className='flex justify-around items-center'>

          </div>
        }
      >
        <LinkReusable href='/' text={texts('home')}/>
        <LinkReusable href='/tools' text={texts('tools')}/>
        <LinkReusable href='/favorites' text={texts('favorites')}/>
        <LinkReusable href='/auth/login' text={texts('login')}/>
        <LinkReusable href='/auth/register' text={texts('register')}/>
      </Drawer>
    </nav>
  )
}