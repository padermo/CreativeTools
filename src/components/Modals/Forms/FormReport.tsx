import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm, Controller } from 'react-hook-form';
import ButtonReusable from '@/components/Reusable/Button';
import InputReusable from '@/components/Reusable/Input';
import axiosConfig from '@/axios/axiosConfig';

// types
import type { FormReportInputs, FormReportProps } from '@/types/generals.types';

export default function FormReport({ _id, name, handleModal }: FormReportProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const t = useTranslations('Report');

  const { handleSubmit, reset, control } = useForm<FormReportInputs>();

  const onSubmit = handleSubmit(async (data) => {
    const { description } = data;
    try {
      setLoading(true)
      const response = await axiosConfig.post('/support/report', { id: _id, text: description })
    } catch (error) {
      console.log(error)
    } finally {
      reset()
      handleModal('report', { _id: '', name: '' })
      setLoading(false)
    }
  })

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-4'>
      <div className='w-full font-light'>
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

      <ButtonReusable text={t('button')} htmlType='submit' type='primary' loading={loading} onClick={onSubmit} />
    </form>
  )
}
