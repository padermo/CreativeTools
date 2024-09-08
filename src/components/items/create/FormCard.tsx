import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useForm, Controller } from 'react-hook-form';
import { useItems } from '@/context/ItemsContext';
import { useAlert } from '@/context/AlertContext';
import { category, subcategory, accessType } from '@/utils/dataSend';
import { isURL } from 'validator';
import { Radio } from 'antd';
import ButtonReusable from '@/components/Reusable/Button';
import InputReusable from '@/components/Reusable/Input';
import SelectReusable from '@/components/Reusable/SelectReusable';
import RadioReusable from '@/components/Reusable/RadioReusable';
import axiosConfig from '@/axios/axiosConfig';
import axios from 'axios';

// types
import type { FormCardInputs } from '@/types/generals.types';
import type { SelectOption } from '@/components/Reusable/types';
import type { HandlerModalFunction } from '@/types/context.types';
import type { SubcategoryKeys } from '@/types/generals.types';

export default function FormCard({ handleModal }: HandlerModalFunction) {
  const [loading, setLoading] = useState<boolean>(false);
  const [subcategoryData, setSubcategoryData] = useState<[SelectOption]>([{ value: '', label: '' }]);

  const { token, mutateItems } = useItems();
  const { handleAlert } = useAlert();

  const c = useTranslations('CreateItem');
  const t = useTranslations('Tools');

  const { handleSubmit, reset, watch, control } = useForm<FormCardInputs>();
  const categoryValues = t('categories').split(',').map((value, index) => { return { value: category[index], label: value } }) as [SelectOption];
  const categorySelect: SubcategoryKeys = watch('category') as SubcategoryKeys;

  const onSubmit = handleSubmit(async (data) => {
    const { name, category, subcategory, url, isFree } = data;
    try {
      setLoading(true)
      const res = await axiosConfig.post('/item', { name, category, subcategory, url, isFree }, { headers: { 'Authorization': `Bearer ${token}` } })

      if (res?.status === 200) {
        handleAlert({ type: 'success', content: c('alerts.created') })
        handleModal('create')
        mutateItems()
        setLoading(false)
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          handleAlert({ type: 'info', content: c('alerts.exists') })
        }
      }
    } finally {
      reset();
    }
  });

  useEffect(() => {
    if (categorySelect) {
      setSubcategoryData(t(`subcategories.${categorySelect}`).split(',').map((value, index) => { return { value: subcategory[categorySelect][index], label: value } }) as [SelectOption])
    }
  }, [categorySelect, t])

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-4'>
      <div className='w-full font-light'>
        <label htmlFor='name'>{c('inputs.name.text')}</label>
        <Controller
          name='name'
          control={control}
          defaultValue=''
          rules={{
            required: {
              value: true,
              message: c('handlers.errors.name.required'),
            }
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <InputReusable
                type='normal'
                id='name'
                value={field.value}
                placeholder={c('inputs.name.placeholder')}
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

      <div className='w-full font-light'>
        <label htmlFor='url'>{c('inputs.url.text')}</label>
        <Controller
          name='url'
          control={control}
          defaultValue=''
          rules={{
            required: {
              value: true,
              message: c('handlers.errors.url.required'),
            },
            validate: (value) => isURL(value) || c('handlers.errors.url.pattern')
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <InputReusable
                type='normal'
                id='url'
                value={field.value}
                placeholder={c('inputs.url.placeholder')}
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

      <div className='w-full font-light'>
        <label htmlFor='category'>{c('inputs.category.text')}</label>
        <Controller
          name='category'
          control={control}
          defaultValue=''
          rules={{
            required: {
              value: true,
              message: c('handlers.errors.category.required'),
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <SelectReusable
                id='category'
                options={categoryValues}
                value={field.value}
                placeholder={c('inputs.category.placeholder')}
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

      <div className='w-full font-light'>
        <label htmlFor='subcategory'>{c('inputs.subcategory.text')}</label>
        <Controller
          name='subcategory'
          control={control}
          defaultValue=''
          rules={{
            required: {
              value: true,
              message: c('handlers.errors.subcategory.required'),
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <SelectReusable
                id='subcategory'
                options={subcategoryData}
                value={field.value}
                placeholder={c('inputs.subcategory.placeholder')}
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

      <div className='w-full font-light'>
        <label htmlFor='isFree'>{c('inputs.isFree.text')}:</label>
        <Controller
          name='isFree'
          control={control}
          rules={{
            required: {
              value: true,
              message: c('handlers.errors.isFree.required'),
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <div className='flex items-center'>
              <RadioReusable onChange={field.onChange}>
                <Radio value={accessType[0]} >{t('accessType').split(',')[0]}</Radio>
                <Radio value={accessType[1]} >{t('accessType').split(',')[1]}</Radio>
              </RadioReusable>
              {error && (
                <span className='text-red-600 text-xs block'>
                  {error.message}
                </span>
              )}
            </div>
          )}
        />
      </div>

      <ButtonReusable text={c('button')} htmlType='submit' type='primary' loading={loading} onClick={onSubmit} />
    </form>
  )
}
