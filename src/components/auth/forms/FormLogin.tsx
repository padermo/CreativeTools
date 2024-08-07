'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from '@/navigation';
import { signIn } from 'next-auth/react';
import { useAlert } from '@/context/AlertContext';
import ButtonReusable from '@/components/reusable/ButtonReusable';
import InputReusable from '@/components/reusable/InputReusable';

// types
import type { ClipboardEventHandler } from 'react';
import type { InputProps } from '@/types/generals.types';

export default function FormLogin() {
  const [loading, setLoading] = useState<boolean>(false);
  const t = useTranslations('Login');
  const { contextHolder, handleAlert } = useAlert();
  const router = useRouter();
  const { handleSubmit, reset, control } = useForm<InputProps>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true)
      const res = await signIn('credentials', {
        email:data.email,
        password:data.password,
        redirect:false
      })

      if(res?.error){
        throw new Error(res.error)
      } else {  
        setLoading(false)
        router.push('/')
        router.refresh();
      }
    } catch (error) {
      handleAlert({type:'info', content:t('alerts.notFound')})
    } finally {
      reset();
    }
  });

  const handlePaste: ClipboardEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className='w-full flex flex-col gap-4 lg:w-2/5'>
      <div className='w-full text-[#222] font-light dark:text-white'>
        <label htmlFor='email'>{t('form.email.text')}</label>
        <Controller
          name='email'
          control={control}
          defaultValue=''
          rules={{
            required: {
              value: true,
              message: t('handlers.errors.email.required'),
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <InputReusable
                type='normal'
                id='email'
                value={field.value}
                placeholder={t('form.email.placeholder')}
                onChange={field.onChange}
              />
              {error && (
                <span className='text-red-600 text-xs block'>
                  {error.message}
                </span>
              )}
            </>
          )}
        />
      </div>

      <div className='w-full text-[#222] font-light dark:text-white'>
        <label htmlFor='password'>{t('form.password.text')}</label>
        <Controller
          name='password'
          control={control}
          defaultValue=''
          rules={{
            required: {
              value: true,
              message: t('handlers.errors.password.required'),
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <InputReusable
                type='password'
                id='password'
                value={field.value}
                placeholder={t('form.password.placeholder')}
                onChange={field.onChange}
                onPaste={handlePaste}
              />
              {error && (
                <span className='text-red-600 text-xs block'>
                  {error.message}
                </span>
              )}
            </>
          )}
        />
      </div>

      <ButtonReusable type='primary' loading={loading} onClick={onSubmit}>
        {t('button')}
      </ButtonReusable>
      {contextHolder}
    </form>
  );
}
