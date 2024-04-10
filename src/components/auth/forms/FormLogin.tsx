'use client';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import ButtonReusable from '@/components/reusable/ButtonReusable';
import InputReusable from '@/components/reusable/InputReusable';

// types
import type { ClipboardEventHandler } from 'react';
import type { InputProps } from '@/types/generals.types';

export default function FormLogin() {
  const [loading, setLoading] = useState<boolean>(false);
  const t = useTranslations('Login');
  const locale = useLocale();
  const router = useRouter();
  const { handleSubmit, reset, control } = useForm<InputProps>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await signIn('credentials', {
        email:data.email,
        password:data.password,
        redirect:false
      })
      console.log('res', res)
      setLoading(true)

      if(res?.error){
        console.log(res)
      } else {
        router.push(`/${locale}/`)
        router.refresh();
      }
    } catch (error) {
      console.log(error)
    } finally {
      reset();
      setLoading(false)
    }
  });

  const handlePaste: ClipboardEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-4'>
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
    </form>
  );
}
