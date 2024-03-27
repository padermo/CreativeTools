'use client'
import { useTranslations } from 'next-intl'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
import { useLocale } from 'next-intl';

export default function Navbar(){
  const t = useTranslations('Navbar')
  const locale = useLocale()
  return(
    <>
      <NavbarDesktop texts={t} locale={locale}/>
      <NavbarMobile texts={t} locale={locale}/>
    </>
  )
}