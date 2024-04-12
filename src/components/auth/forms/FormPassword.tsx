'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Controller, useForm } from 'react-hook-form'
import { useAlert } from '@/context/AlertContext'
import { useRouter } from '@/navigation'
import axiosConfig from '@/axios/axiosConfig'
import axios from 'axios'
import InputReusable from '@/components/reusable/InputReusable'
import ButtonReusable from '@/components/reusable/ButtonReusable'

// types
import type { InputsFormPassword } from './types'

export default function FormPassword(){
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const email = localStorage.getItem('email');

  const t = useTranslations('Recovery');

  const { handleAlert } = useAlert();
  const { handleSubmit, watch, control, reset } = useForm<InputsFormPassword>();

  const onSubmit = handleSubmit(async(data) => {
    const { password } = data;
    try {
      const res = await axiosConfig.post('/recovery/modify-password', {email, password})
      setLoading(true)

      if(res?.status === 200){
        handleAlert({type:'success', content: t('alerts.success')})
        localStorage.removeItem('email')
        router.push('/auth/login')
      }
      
    } catch (error) {
      if(axios.isAxiosError(error)){
        if(error.response?.status === 400){
          handleAlert({type:'info', content: error.response.data.message})
        }
      }
    } finally {
      setLoading(false);
      reset()
    }
  })

  return(
    <form onSubmit={onSubmit} className='w-full flex flex-col gap-4 lg:w-2/5'>
      <h1 className='text-center text-xl font-semibold text-[#222] dark:text-white'>{t('content.title')}</h1>
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
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
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
        {t('buttons.modify')}
      </ButtonReusable>
    </form>
  )
}