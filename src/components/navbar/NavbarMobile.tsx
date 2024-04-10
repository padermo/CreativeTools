'use client';
import { useState } from 'react';
import LinkReusable from '../reusable/LinkReusable';
import { Drawer } from 'antd';
import { MenuOutlined, CloseOutlined, LogoutOutlined } from '@ant-design/icons'
import ButtonReusable from '../reusable/ButtonReusable';
import SwitchLang from '../config/SwitchLang';
import SwitchTheme from '../config/SwitchTheme';
import { useSession } from 'next-auth/react';
import { useTheme } from '@/context/ThemeContext';

// types
import type { NavbarProps } from '@/types/generals.types';

export default function NavbarMobile({texts, locale, logout}:NavbarProps){
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
        <LinkReusable href={`/${locale}/`} text={texts('home')}/>
        <LinkReusable href={`/${locale}/tools`} text={texts('tools')}/>
        <LinkReusable href={`/${locale}/favorites`} text={texts('favorites')}/>
        <LinkReusable href={`/${locale}/configuration`} text={texts('config')}/>
        {
          status === 'unauthenticated' &&
          (
            <>
              <LinkReusable href={`/${locale}/auth/login`} text={texts('login')}/>
              <LinkReusable href={`/${locale}/auth/register`} text={texts('register')}/>
            </>
          )
        }
      </Drawer>
    </nav>
  )
}