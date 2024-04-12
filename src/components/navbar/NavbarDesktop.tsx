'use client';
import LinkReusable from '../reusable/LinkReusable';
import SwitchTheme from '../config/SwitchTheme';
import SwitchLang from '../config/SwitchLang';
import UserMenuDesktop from './UserMenuDesktop';
import { useSession } from 'next-auth/react';

// types
import type { NavbarProps } from '@/types/generals.types';

export default function NavbarDesktop({ texts, logout }: NavbarProps) {
  const { status } = useSession();
  return (
    <nav className='w-full items-center justify-between absolute top-0 z-10 px-8 py-4 hidden lg:flex'>
      <picture></picture>

      <div className='flex items-center gap-4'>
        <LinkReusable href='/' text={texts('home')} />
        <LinkReusable href='/tools' text={texts('tools')} />
        {status === 'authenticated' ? 
          (
            <UserMenuDesktop logout={logout}/>
          ) 
          : 
          (
            <>
              <LinkReusable href='/auth/login' text={texts('login')} />
              <LinkReusable
                href='/auth/register'
                text={texts('register')}
              />
            </>
          )
        }
        <SwitchTheme />
        <SwitchLang />
      </div>
    </nav>
  );
}
