import { useTranslations } from 'next-intl';
import FormRegister from '@/components/auth/forms/FormRegister';
import PageLayout from '@/components/parentComponents/PageLayout';
import ValidateSession from '@/components/parentComponents/ValidateSession';
import AlertProvider from '@/context/AlertContext';

export default function RegisterPage(){
  const t = useTranslations('Register.content')
  return (
    <ValidateSession>
      <PageLayout>
        <AlertProvider>
          <div className='min-h-dvh max-h-full flex flex-col justify-center items-center gap-4'>
            <h1 className='text-2xl text-[#222] dark:text-white'>{t('title')}</h1>
            <FormRegister/>
          </div>
        </AlertProvider>
      </PageLayout>
    </ValidateSession>
  );
}