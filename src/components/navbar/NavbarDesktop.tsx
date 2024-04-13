'use client';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import LinkReusable from '../reusable/LinkReusable';
import SwitchTheme from '../config/SwitchTheme';
import SwitchLang from '../config/SwitchLang';
import UserMenuDesktop from './UserMenuDesktop';
import Logo from '../svg/Logo';

// types
import type { NavbarProps } from '@/types/generals.types';

export default function NavbarDesktop({ texts, logout }: NavbarProps) {
  const { status } = useSession();
  const searchParams = useSearchParams();
  const viewPolicyCookies = searchParams.get('view');
  return (
    <nav className={`w-full items-center justify-between absolute top-0 z-10 px-8 py-4 hidden lg:flex ${viewPolicyCookies === 'cookies' && 'lg:hidden'}`}>
      <picture>
        <Logo/>
      </picture>

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
