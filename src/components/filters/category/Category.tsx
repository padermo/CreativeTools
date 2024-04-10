import { useTranslations } from 'next-intl'
import { category } from '@/utils/dataSend'
import { useItems } from '@/context/ItemsContext';
import ButtonReusable from '@/components/reusable/ButtonReusable'

// type
import type { SelectOption } from '@/components/reusable/types';

export default function Category(){
  const { setSelectedCategory } = useItems();
  const t = useTranslations('Tools');
  const categoryData:[SelectOption] = t('categories').split(',').map((value, index) => {return {value:category[index], label:value}}) as [SelectOption];

  return (
    <div className='flex items-center justify-start gap-3'>
      {
        categoryData && categoryData.map(item => (
          <ButtonReusable key={item.value} loading={false} type='primary' onClick={() => setSelectedCategory(item.value)}>
            {item.label}
          </ButtonReusable>
        ))
      }
    </div>
  )
}