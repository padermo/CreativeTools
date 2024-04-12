'use client';
import { useState } from 'react';
import { Drawer } from 'antd';
import { MenuOutlined, CloseOutlined, LogoutOutlined } from '@ant-design/icons'
import ButtonReusable from '../reusable/ButtonReusable';
import SwitchLang from '../config/SwitchLang';
import SwitchTheme from '../config/SwitchTheme';
import { Link } from '@/navigation';
import { useSession } from 'next-auth/react';
import { useTheme } from '@/context/ThemeContext';

// types
import type { NavbarProps } from '@/types/generals.types';

export default function NavbarMobile({texts, logout}:NavbarProps){
  const [isView, setIsView] = useState<boolean>(false);
  const { status } = useSession();
  const { theme } = useTheme();

  const handleViewDrawer = () => {
    setIsView(!isView)
  }

  return(
    <nav className='py-4 px-4 md:px-8 lg:hidden'>
      <ButtonReusable type='primary' loading={false} onClick={handleViewDrawer}>
        <MenuOutlined/>
      </ButtonReusable>

      <Drawer
        style={{background: theme === 'dark' ? '#333' : '#e8e8e8'}}
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
            <SwitchTheme/>
            <SwitchLang/>
            {
              status === 'authenticated' &&
              <button onClick={logout} className='text-[#222] dark:text-white'>
                <LogoutOutlined/>
              </button>
            }
          </div>
        }
      >
        <Link href='/' onClick={handleViewDrawer} className='text-[#222] block dark:text-white hover:text-[#9337A5] dark:hover:text-[#9337A5]'>{texts('home')}</Link>
        <Link href='/tools' onClick={handleViewDrawer} className='text-[#222] block dark:text-white hover:text-[#9337A5] dark:hover:text-[#9337A5]'>{texts('tools')}</Link>
        <Link href='/favorites' onClick={handleViewDrawer} className='text-[#222] block dark:text-white hover:text-[#9337A5] dark:hover:text-[#9337A5]'>{texts('favorites')}</Link>
        {
          status === 'unauthenticated' &&
          (
            <>
              <Link href='/auth/login' onClick={handleViewDrawer} className='text-[#222] block dark:text-white hover:text-[#9337A5] dark:hover:text-[#9337A5]'>{texts('login')}</Link>
              <Link href='/auth/register' onClick={handleViewDrawer} className='text-[#222] block dark:text-white hover:text-[#9337A5] dark:hover:text-[#9337A5]'>{texts('register')}</Link>
            </>
          )
        }
      </Drawer>
    </nav>
  )
}