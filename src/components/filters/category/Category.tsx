import ButtonReusable from '@/components/reusable/ButtonReusable'
// type
import type { CategoryProps } from '@/types/generals.types'

export default function Category({category, handleCategory}:CategoryProps){
  return (
    <div className='w-full flex items-center justify-start gap-4'>
      {
        category && category.map((element, index) => (
          <ButtonReusable key={index} type='primary' onClick={()=>handleCategory(index)}>
            {element.charAt(0).toUpperCase() + element.slice(1)}
          </ButtonReusable>
        ))
      }
    </div>
  )
}