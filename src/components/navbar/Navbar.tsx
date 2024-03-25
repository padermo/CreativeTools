'use client'
import { useTranslations } from 'next-intl'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'

export default function Navbar(){
  const t = useTranslations('Navbar')
  return(
    <>
      <NavbarDesktop texts={t}/>
      <NavbarMobile texts={t}/>
    </>
  )
}