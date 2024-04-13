'use client'
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

export default function Footer(){
  const t = useTranslations('Footer');
  const searchParams = useSearchParams();
  const viewPolicyCookies = searchParams.get('view');

  return(
    <footer className={`w-full h-11 bg-[#523061] text-white font-light text-sm flex items-center justify-center px-4 md:px-6 lg:px-8 ${viewPolicyCookies === 'cookies' && 'hidden'}`}>
      <p>&copy; {t('title')}</p>
    </footer>
  )
}