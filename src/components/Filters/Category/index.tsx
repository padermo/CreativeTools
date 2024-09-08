import { useTranslations } from 'next-intl'
import { category } from '@/utils/dataSend'
import { useItems } from '@/context/ItemsContext';
import ButtonReusable from '@/components/Reusable/Button'
import Clear from '../Clear';
import CreateItemButton from '@/components/items/create/CreateItemButton';

// type
import type { SelectOption } from '@/components/Reusable/types';

export default function Category() {
  const { handleCategory } = useItems();
  const t = useTranslations('Tools');
  const categoryData: [SelectOption] = t('categories').split(',').map((value, index) => { return { value: category[index], label: value } }) as [SelectOption];

  return (
    <div className='flex flex-wrap items-center justify-start gap-2'>
      {
        categoryData && categoryData.map(item => (
          <ButtonReusable key={item.value} text={item.label} htmlType='button' type='primary' onClick={() => handleCategory(item.value)} />
        ))
      }
      <Clear />
      <CreateItemButton />
    </div>
  )
}
