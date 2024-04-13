'use client'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { chrome, explorer, mozilla, safari } from '@/utils/urls';
import { useSearchParams, notFound } from 'next/navigation';

export default function Policy(){
  const t = useTranslations('Cookies');
  const searchParams = useSearchParams();
  const viewPolicyCookies = searchParams.get('view');

  if(viewPolicyCookies === 'cookies'){
    return (
      <article className='px-4 py-8 md:px-8 lg:px-12 w-full min-h-screen max-h-full flex flex-col gap-10 justify-center bg-white text-[#222] dark:text-white dark:bg-[#222]'>
        <Link href='/' className='underline font-medium'>{t('policy.back')}</Link>
        <div className='flex flex-col gap-3'>
          <h4 className='font-bold text-xl'>{t('policy.title')}</h4>
          <p>{t('policy.intro')}</p>
        </div>
        <div className='flex flex-col gap-3'>
          <h4 className='font-bold text-xl'>{t('policy.whatCookies.title')}</h4>
          <p>{t('policy.whatCookies.content')}</p>
        </div>
        <div className='flex flex-col gap-3'>
          <h4 className='font-bold text-xl'>{t('policy.typesCookies.title')}</h4>
          <p>{t('policy.typesCookies.content')}</p>
          <p>
            <span className='underline font-semibold'>{t('policy.typesCookies.types.technical.title')}</span>
            <span>{t('policy.typesCookies.types.technical.content')}</span>
          </p>
          <p>
            <span className='underline font-semibold'>{t('policy.typesCookies.types.personalization.title')}</span>
            <span>{t('policy.typesCookies.types.personalization.content')}</span>
          </p>
        </div>
        <div className='flex flex-col gap-3'>
          <h4 className='font-bold text-xl'>{t('policy.disabledCookies.title')}</h4>
          <p>{t('policy.disabledCookies.content.paragraphOne')}</p>
          <p>{t('policy.disabledCookies.content.paragraphTwo')}</p>
          <p>{t('policy.disabledCookies.content.paragraphThree')}</p>
          <Link href={chrome} target='_blank' className='underline'>{t('policy.disabledCookies.options.chrome')}</Link>
          <Link href={explorer} target='_blank' className='underline'>{t('policy.disabledCookies.options.explorer')}</Link>
          <Link href={mozilla} target='_blank' className='underline'>{t('policy.disabledCookies.options.mozilla')}</Link>
          <Link href={safari} target='_blank' className='underline'>{t('policy.disabledCookies.options.safari')}</Link>
        </div>
        <div className='flex flex-col gap-3'>
          <h4 className='font-bold text-xl'>{t('policy.cookieWarning.title')}</h4>
          <p>{t('policy.cookieWarning.content')}</p>
        </div>
      </article>
    )
  }

  return notFound()
}