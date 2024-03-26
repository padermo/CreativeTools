'use client'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/navigation'
import { Switch } from 'antd'
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt'

export default function SwitchLang(){
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const changeLang = (checked:boolean|undefined) => {
    if(checked){
      router.replace(pathname, {locale: 'en'})
    } else {
      router.replace(pathname, {locale: 'es'})
    }
  }

  return(
    <ConfigThemeAnt>
      <Switch 
      checkedChildren={'en'} 
      unCheckedChildren={'es'} 
      defaultChecked={locale === 'en' ? true : false}
      onChange={changeLang}
      />
    </ConfigThemeAnt>
  )
}