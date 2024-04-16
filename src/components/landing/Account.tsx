'use client'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/navigation';
import ButtonReusable from '../reusable/ButtonReusable';
import Join from '../svg/Join';

export default function Account(){
  const t = useTranslations('Content.Account');
  const router = useRouter();

  return(
    <article className='w-full min-h-dvh max-h-full flex flex-col px-4 lg:justify-normal lg:flex-row md:px-6 lg:px-8'>
      <picture className='w-full h-dvh hidden items-end lg:flex'>
        <Join/>
      </picture>
      <div className='w-full h-dvh flex flex-col justify-center items-center text-center gap-6 text-wrap text-[#222] text-lg font-light tracking-wide dark:text-white'>
        <h3 className='w-full md:w-1/2 lg:w-1/2'>{t('title')}</h3>
        <div>
          <ButtonReusable type='primary' loading={false} onClick={()=>router.push('/auth/register')} >{t('cta')}</ButtonReusable>
        </div>
      </div>
    </article>
  )
}