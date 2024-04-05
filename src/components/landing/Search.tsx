import { useTranslations } from 'next-intl'

export default function Search(){
  const t = useTranslations('Content.Search');

  return(
    <article className='w-full min-h-dvh max-h-full search flex flex-col justify-center items-center text-white font-medium text-2xl text-center tracking-wider text-wrap px-4'>
      <h3 className='drop-shadow-lg'>{t('title')}</h3>
    </article>
  )
}