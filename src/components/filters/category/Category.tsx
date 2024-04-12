import { useTranslations } from 'next-intl'
import { category } from '@/utils/dataSend'
import { useItems } from '@/context/ItemsContext';
import ButtonReusable from '@/components/reusable/ButtonReusable'
import Clear from '../clear/Clear';
import CreateItemButton from '@/components/items/create/CreateItemButton';

// type
import type { SelectOption } from '@/components/reusable/types';

export default function Category(){
  const { handleCategory } = useItems();
  const t = useTranslations('Tools');
  const categoryData:[SelectOption] = t('categories').split(',').map((value, index) => {return {value:category[index], label:value}}) as [SelectOption];

  return (
    <div className='flex flex-wrap items-center justify-start gap-2'>
      {
        categoryData && categoryData.map(item => (
          <ButtonReusable key={item.value} loading={false} type='primary' onClick={() => handleCategory(item.value)}>
            {item.label}
          </ButtonReusable>
        ))
      }
      <Clear/>
      <CreateItemButton/>
    </div>
  )
}