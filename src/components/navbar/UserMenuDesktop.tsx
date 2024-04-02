import { UserOutlined } from '@ant-design/icons'
import { useTranslations } from 'next-intl'
import { Dropdown } from 'antd'
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt'
import { useRouter } from 'next/navigation'

// types
import type { MenuProps } from 'antd'
import type { UserMenuProps } from '@/types/generals.types'

export default function UserMenuDesktop({locale, logout}:UserMenuProps){
  const t = useTranslations('Navbar');
  const router = useRouter();

  const items:MenuProps['items'] = [
    {
      key: '1',
      label: (<button name='favorites' onClick={() => router.push(`/${locale}/favorites`)}>{t('favorites')}</button>)
    },
    {
      key: '2',
      label: (<button name='config' onClick={() => router.push(`/${locale}/configuration`)}>{t('config')}</button>)
    },
    {
      key: '3',
      label: (<button name='logout' onClick={logout}>{t('logout')}</button>)
    }
  ]

  return (
    <ConfigThemeAnt>
      <Dropdown menu={{items}} placement='bottomRight'>
        <button className='rounded-full p-2 flex items-center border-none outline-none text-[#222] dark:text-white hover:bg-gray-100 dark:hover:bg-[#444]'>
          <UserOutlined/>
        </button>
      </Dropdown>
    </ConfigThemeAnt>
  )
}