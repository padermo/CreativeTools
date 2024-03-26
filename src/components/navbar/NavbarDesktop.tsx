'use client';
import LinkReusable from '../reusable/LinkReusable';
import SwitchTheme from '../config/SwitchTheme';
import SwitchLang from '../config/SwitchLang';

// types
import type { NavbarProps } from '@/types/generals.types';

export default function NavbarDesktop({ texts }: NavbarProps) {
  return (
    <nav className='items-center justify-between absolute top-0 z-10 px-8 py-4 hidden lg:flex'>
      <picture></picture>

      <div className='flex items-center gap-4'>
        <LinkReusable href='/tools' text={texts('tools')}/>
        <LinkReusable href='/favorites' text={texts('favorites')}/>
        <LinkReusable href='/auth/login' text={texts('login')}/>
        <LinkReusable href='/auth/register' text={texts('register')}/>
        <SwitchTheme/>
        <SwitchLang/>
      </div>
    </nav>
  );
}
