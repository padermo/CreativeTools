'use client'
import { SunFilled, MoonFilled } from '@ant-design/icons'
import { useTheme } from '@/context/ThemeContext'

export default function SwitchTheme(){
  const { handleTheme, theme } = useTheme();

  return(
    <button name={theme === 'dark' ? 'light' : 'dark'} onClick={handleTheme} className='flex items-center text-[#222] p-2 rounded-full transition-colors duration-300 ease-in-out hover:bg-[#d5d5d5] dark:hover:bg-[#555] dark:text-white hover:shadow-lg'>
      {
        theme === 'dark' ?
        <SunFilled/>
        :
        <MoonFilled/>
      }
    </button>
  )
}