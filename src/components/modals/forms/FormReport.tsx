'use client'
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm, Controller } from 'react-hook-form';
import ButtonReusable from '@/components/reusable/ButtonReusable';
import InputReusable from '@/components/reusable/InputReusable';
import axios from 'axios';
import axiosConfig from '@/axios/axiosConfig';

// types
import type { FormReportInputs, FormReportProps } from '@/types/generals.types';

export default function FormReport({_id, name, handleModal}:FormReportProps){
  const [loading, setLoading] = useState<boolean>(false);
  const t = useTranslations('Report');

  const { handleSubmit, reset, control } = useForm<FormReportInputs>();

  const onSubmit = handleSubmit(async (data) => {
    const { description } = data;
    try {
      const response = await axiosConfig.post('/support/report', {id:_id, text:description})
      setLoading(true)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      reset()
      handleModal('report', {_id:'', name:''})
      setLoading(false)
    }
  })

  return(
    <form onSubmit={onSubmit} className='flex flex-col gap-4'>
      <div className='w-full text-[#222] font-light dark:text-white'>
        <label htmlFor='description' className='mb-2 inline-block text-sm text-wrap break-words'>{t('form.inputs.description.text')}</label>
        <Controller
          name='description'
          control={control}
          defaultValue=''
          rules={{
            required: {
              value: true,
              message: t('form.handlers.errors.description.required'),
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <InputReusable
                type='area'
                id='description'
                value={field.value}
                placeholder={t('form.inputs.description.placeholder')}
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