'use client';
import LinkReusable from '../reusable/LinkReusable';
import SwitchTheme from '../config/SwitchTheme';
import SwitchLang from '../config/SwitchLang';
import UserMenuDesktop from './UserMenuDesktop';
import { useSession } from 'next-auth/react';

// types
import type { NavbarProps } from '@/types/generals.types';

export default function NavbarDesktop({ texts, locale, logout }: NavbarProps) {
  const { status } = useSession();
  return (
    <nav className='items-center justify-between px-8 py-4 hidden lg:flex'>
      <picture></picture>

      <div className='flex items-center gap-4'>
        <LinkReusable href={`/${locale}/tools`} text={texts('tools')} />
        {status === 'authenticated' ? 
          (
            <UserMenuDesktop locale={locale} logout={logout}/>
          ) 
          : 
          (
            <>
              <LinkReusable href={`/${locale}/auth/login`} text={texts('login')} />
              <LinkReusable
                href={`/${locale}/auth/register`}
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
