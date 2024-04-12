import PageLayout from '@/components/parentComponents/PageLayout';
import ValidateSession from '@/components/parentComponents/ValidateSession';
import AlertProvider from '@/context/AlertContext';
import Recovery from '@/components/auth/recovery/Recovery';

export default function RecoveryPage(){
  return(
    <PageLayout>
      <ValidateSession>
        <AlertProvider>
          <div className='min-h-dvh max-h-full flex flex-col justify-center items-center'>
            <Recovery/>
          </div>
        </AlertProvider>
      </ValidateSession>
    </PageLayout>
  )
}