'use client'
import { SunFilled, MoonFilled } from '@ant-design/icons'
import { useTheme } from '@/context/ThemeContext'

export default function SwitchTheme(){
  const { handleTheme, theme } = useTheme();

  return(
    <button name={theme === 'dark' ? 'light' : 'dark'} onClick={handleTheme} className='flex items-center text-[#222] p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#444] dark:text-white hover:shadow-lg'>
      {
        theme === 'dark' ?
        <SunFilled/>
        :
        <MoonFilled/>
      }
    </button>
  )
}