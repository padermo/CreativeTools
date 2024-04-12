import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import FormLogin from '@/components/auth/forms/FormLogin';
import PageLayout from '@/components/parentComponents/PageLayout';
import ValidateSession from '@/components/parentComponents/ValidateSession';
import AlertProvider from '@/context/AlertContext';

export default function LoginPage() {
  const t = useTranslations('Login.content')
  return (
    <ValidateSession>
      <PageLayout>
        <AlertProvider>
          <div className='min-h-dvh max-h-full flex flex-col justify-center items-center gap-4'>
            <h1 className='text-2xl text-[#222] dark:text-white'>{t('title')}</h1>
            <FormLogin/>
            <Link href={'/auth/recovery'} className='text-[#222] text-sm font-light hover:underline dark:text-white'>{t('recovery')}</Link>
          </div>
        </AlertProvider>
      </PageLayout>
    </ValidateSession>
  );
}
