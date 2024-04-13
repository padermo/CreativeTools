'use client'
import { useEffect, useState } from 'react'
import { setCookie, getCookie } from 'cookies-next'
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { useRouter } from '@/navigation'
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt'
import ButtonReusable from '../reusable/ButtonReusable'

export default function Consent(){
  const [statusConsent, setStatusConsent] = useState<boolean>(false);
  const t = useTranslations('Cookies');
  const router = useRouter();
  const searchParams = useSearchParams();
  const viewPolicyCookies = searchParams.get('view');

  const handleCookieConsent = () => {
    setCookie('CookieConsent', 'accepted', {sameSite:'lax'});
    setStatusConsent(true);
  }

  const handlePolicyCookies = () => {
    router.push('/policy-cookies?view=cookies')
  }

  useEffect(() => {
    const consent = getCookie('CookieConsent')
    if (consent) setStatusConsent(true);
  }, [])

  if(!statusConsent){
    return(
      <div className={`w-full h-dvh fixed z-[1000] bg-neutral-900/50 top-0 left-0 ${viewPolicyCookies && 'hidden'}`}>
        <ConfigThemeAnt>
          <div className='bg-gray-100 fixed bottom-2 left-2 right-2 px-3 py-4 rounded-lg grid gap-4 shadow-lg lg:w-1/4 dark:bg-[#444]'>
            <label className='text-center font-medium text-lg text-[#222] dark:text-white'>{t('title')}</label>
            <label className='text-center font-light text-[#222] dark:text-white'>{t('text')}</label>
            <div className='flex flex-col gap-2'>
              <ButtonReusable type='primary' loading={false} onClick={handleCookieConsent}>{t('success')}</ButtonReusable>
              <ButtonReusable type='default' loading={false} onClick={handlePolicyCookies}>{t('notice')}</ButtonReusable>
            </div>
          </div>
        </ConfigThemeAnt>
      </div>
    )
  }

  return null;
}