import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import FormLogin from '@/components/Auth/Forms/FormLogin';
import PageLayout from '@/components/ParentComponents/PageLayout';
import ValidateSession from '@/components/ParentComponents/ValidateSession';
import AlertProvider from '@/context/AlertContext';

export default function LoginPage() {
  const t = useTranslations('Login.content')
  return (
    <ValidateSession>
      <PageLayout>
        <AlertProvider>
          <div className='min-h-dvh max-h-full flex flex-col justify-center items-center gap-4'>
            <h1 className='text-2xl'>{t('title')}</h1>
            <FormLogin />
            <Link href={'/auth/recovery'} className='text-sm font-light hover:underline'>{t('recovery')}</Link>
          </div>
        </AlertProvider>
      </PageLayout>
    </ValidateSession>
  );
}
