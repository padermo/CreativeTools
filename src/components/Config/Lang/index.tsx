'use client'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/navigation'
import { Dropdown } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
// types
import type { MenuProps } from 'antd'

export default function Lang() {
  const t = useTranslations("Language");
  const pathname = usePathname();
  const router = useRouter();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (<button onClick={() => router.replace(pathname, { locale: 'es' })}>{t('spanish')}</button>)
    },
    {
      key: '2',
      label: (<button onClick={() => router.replace(pathname, { locale: 'en' })}>{t('english')}</button>)
    }
  ]

  return (
    <Dropdown menu={{ items }} placement='bottomRight'>
      <button className='rounded-full p-2 flex items-center border-none outline-none text-[#888] hover:text-white hover:bg-[#1b1b1b]'>
        <GlobalOutlined />
      </button>
    </Dropdown>
  )
}
