'use client'
import { useTranslations } from 'next-intl'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
import { useLocale } from 'next-intl';
import { signOut } from 'next-auth/react';
import { removeCookie } from '@/app/actions';
import { useRouter } from 'next/navigation';

export default function Navbar(){
  const t = useTranslations('Navbar')
  const locale = useLocale()
  const router = useRouter();

  const logout = async() => {
    try {
      signOut();
      removeCookie();
    } catch (error) {
      console.log(error)
    } finally {
      router.push(`/${locale}/`)
    }
  }
  return(
    <>
      <NavbarDesktop texts={t} locale={locale} logout={logout}/>
      <NavbarMobile texts={t} locale={locale} logout={logout}/>
    </>
  )
}