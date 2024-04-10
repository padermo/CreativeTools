import FormLogin from '@/components/auth/forms/FormLogin';
import PageLayout from '@/components/parentComponents/PageLayout';
import ValidateSession from '@/components/parentComponents/ValidateSession';
import { useTranslations } from 'next-intl';

export default function LoginPage() {
  const t = useTranslations('Login.content')
  return (
    <ValidateSession>
      <PageLayout>
        <div className='min-h-dvh max-h-full flex flex-col justify-center items-center gap-4'>
          <h1 className='text-2xl text-[#222] dark:text-white'>{t('title')}</h1>
          <FormLogin/>
          <p className='text-sm font-light no-underline hover:underline'>{t('recovery')}</p>
        </div>
      </PageLayout>
    </ValidateSession>
  );
}
