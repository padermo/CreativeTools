'use client'
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm, Controller } from 'react-hook-form';
import ButtonReusable from '@/components/reusable/ButtonReusable';
import InputReusable from '@/components/reusable/InputReusable';
import axios from 'axios';
import axiosConfig from '@/axios/axiosConfig';

// types
import type { FormContactInputs, FormContactProps } from '@/types/generals.types';

export default function FormContact({handleModal}:FormContactProps){
  const [loading, setLoading] = useState<boolean>(false);
  const t = useTranslations('Contact');

  const { handleSubmit, reset, control } = useForm<FormContactInputs>();

  const onSubmit = handleSubmit(async (data) => {
    const { content, to } = data;
    try {
      setLoading(true)
      const response = await axiosConfig.post('/support', {to, text:content})
    } catch (error) {
      console.log(error)
    } finally {
      reset()
      handleModal('contact')
      setLoading(false)
    }
  })

  return(
    <form onSubmit={onSubmit} className='flex flex-col gap-4'>
      <div className='w-full text-[#222] font-light dark:text-white'>
        <label htmlFor='to' className='mb-2 inline-block text-wrap break-words'>{t('form.email.text')}</label>
        <Controller
          name='to'
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
                id='to'
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
        <label htmlFor='content' className='mb-2 inline-block text-wrap break-words'>{t('form.subject.text')}</label>
        <Controller
          name='content'
          control={control}
          defaultValue=''
          rules={{
            required: {
              value: true,
              message: t('handlers.errors.subject.required'),
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <InputReusable
                type='area'
                id='content'
                value={field.value}
                placeholder={t('form.subject.placeholder')}
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

      <ButtonReusable type='primary' loading={loading} onClick={onSubmit}>
        {t('button')}
      </ButtonReusable>
    </form>
  )
}