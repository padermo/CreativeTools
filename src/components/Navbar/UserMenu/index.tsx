import { UserOutlined } from '@ant-design/icons'
import { useTranslations } from 'next-intl'
import { Dropdown } from 'antd'
import { Link } from '@/navigation'
// types
import type { MenuProps } from 'antd'
import type { UserMenuProps } from '@/types/generals.types'

export default function UserMenu({ logout }: UserMenuProps) {
  const t = useTranslations('Navbar');

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (<Link href={'/favorites'} >{t('favorites')}</Link>)
    },
    {
      key: '2',
      label: (<button name='logout' onClick={logout}>{t('logout')}</button>)
    }
  ]

  return (
    <Dropdown menu={{ items }} placement='bottomRight'>
      <button className='rounded-full p-2 flex items-center border-none outline-none text-[#888] hover:text-white hover:bg-[#1b1b1b]'>
        <UserOutlined />
      </button>
    </Dropdown>
  )
}
