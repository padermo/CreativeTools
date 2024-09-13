'use client'
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className='w-full h-14 bg-[#0b0b0b] text-white font-light text-sm text-center flex items-center justify-center px-4 md:px-6 lg:px-8'>
      <p>&copy; {t('title')}</p>
    </footer>
  )
}
