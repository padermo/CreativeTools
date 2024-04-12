'use client'
import { useTranslations } from 'next-intl'
import { signOut } from 'next-auth/react';
import { removeCookie } from '@/app/actions';
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'

export default function Navbar(){
  const t = useTranslations('Navbar')

  const logout = async() => {
    signOut();
    removeCookie();
  }
  
  return(
    <>
      <NavbarDesktop texts={t} logout={logout}/>
      <NavbarMobile texts={t} logout={logout}/>
    </>
  )
}