'use client'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter } from 'next/navigation';
import ButtonReusable from '../reusable/ButtonReusable';
import Join from '../svg/Join';

export default function Account(){
  const t = useTranslations('Content.Account');
  const router = useRouter();
  const locale = useLocale();

  return(
    <article className='w-full min-h-dvh max-h-full flex flex-col px-4 lg:justify-normal lg:flex-row md:px-6 lg:px-8'>
      <picture className='w-full h-dvh hidden items-end lg:flex'>
        <Join/>
      </picture>
      <div className='w-full h-dvh flex flex-col justify-center items-center text-center gap-6 text-wrap text-[#222] text-lg font-light tracking-wide dark:text-white'>
        <h3 className='w-full lg:w-1/2'>{t('title')}</h3>
        <ButtonReusable type='primary' loading={false} onClick={()=>router.push(`/${locale}/auth/register`)} >{t('cta')}</ButtonReusable>
      </div>
    </article>
  )
}