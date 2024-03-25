import { useTranslations } from 'next-intl'

export default function Header(){
  const t = useTranslations('Header');
  return(
    <main className='w-full min-h-dvh max-h-full flex flex-col justify-center items-center gap-4 text-[#222] dark:text-white px-4 md:px-6 lg:px-8'>
      <h1 className='text-3xl font-semibold'>{t('title')}</h1>
      <h2 className='text-lg font-light tracking-wide'>{t('legend')}</h2>
    </main>
  )
}