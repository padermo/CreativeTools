import { useTranslations } from 'next-intl';

export default function Footer(){
  const t = useTranslations('Footer');

  return(
    <footer className='w-full h-11 bg-[#523061] text-white font-light text-sm flex items-center justify-center px-4 md:px-6 lg:px-8'>
      <p>&copy; {t('title')}</p>
    </footer>
  )
}