'use client'
import { useEffect, useState } from 'react'
import { setCookie, getCookie } from 'cookies-next'
import { useTranslations } from 'next-intl'
import { useRouter, usePathname } from '@/navigation'
import ButtonReusable from '../Reusable/Button'

export default function Consent() {
  const [statusConsent, setStatusConsent] = useState<boolean>(false);
  const t = useTranslations('Cookies');
  const router = useRouter();
  const pathname = usePathname();

  const handleCookieConsent = () => {
    setCookie('CookieConsent', 'accepted', { sameSite: 'lax' });
    setStatusConsent(true);
  }

  const handlePolicyCookies = () => {
    router.push('/policy-cookies')
  }

  useEffect(() => {
    const consent = getCookie('CookieConsent')
    if (consent) setStatusConsent(true);
  }, [])

  if (!statusConsent) {
    return (
      <div className={`w-full h-dvh fixed z-[1000] bg-black/50 top-0 left-0 ${pathname === '/policy-cookies' && 'hidden'}`}>
        <div className='bg-[#111] fixed bottom-2 left-2 right-2 px-3 py-4 rounded-lg grid border border-neutral-800 gap-4 lg:w-1/4'>
          <label className='text-center font-medium text-lg'>{t('title')}</label>
          <label className='text-center font-light'>{t('text')}</label>
          <div className='flex flex-col gap-2'>
            <ButtonReusable text={t('success')} htmlType='button' type='primary' onClick={handleCookieConsent} />
            <ButtonReusable text={t('notice')} htmlType='button' type='default' loading={false} onClick={handlePolicyCookies} />
          </div>
        </div>
      </div>
    )
  }

  return null;
}
