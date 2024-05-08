'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from '@/navigation';
import { useAlert } from '@/context/AlertContext';
import ButtonReusable from '@/components/reusable/ButtonReusable';
import InputReusable from '@/components/reusable/InputReusable';
import axiosConfig from '@/axios/axiosConfig';
import axios from 'axios';

// types
import type { ClipboardEventHandler } from 'react';
import type { InputWatchProps } from '@/types/generals.types';

export default function FormRegister(){
  const [loading, setLoading] = useState<boolean>(false);
  const t = useTranslations('Register');
  const router = useRouter();
  const { contextHolder, handleAlert } = useAlert();
  const { handleSubmit, reset, watch, control } = useForm<InputWatchProps>();

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;
    try {
      setLoading(true)
      const res = await axiosConfig.post('/register', {email, password})

      if(res?.status === 201){
        setLoading(false)
        router.push('/login')
        router.refresh();
      }
    } catch (error) {
      if(axios.isAxiosError(error)){
        if(error.response?.status === 401){
          handleAlert({type:'info', content: t('alerts.registered')})
        }
      }
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
            pattern: {
              value: /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/,
              message: t('handlers.errors.email.pattern')
            }
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
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#*?&])[A-Za-z\d@$!%#*?&]{8,}$/,
              message: t('handlers.errors.password.pattern')
            }
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

      <div className='w-full text-[#222] font-light dark:text-white'>
        <label htmlFor='confirm_password'>{t('form.confirm_password.text')}</label>
        <Controller
          name='confirm_password'
          control={control}
          defaultValue=''
          rules={{
            required: {
              value: true,
              message: t('handlers.errors.confirm_password.required'),
            },
            validate: (value) => 
              value === watch('password') || t('handlers.errors.confirm_password.pattern')
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <InputReusable
                type='password'
                id='confirm_password'
                value={field.value}
                placeholder={t('form.confirm_password.placeholder')}
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
  )
}