'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import { setCookie, getCookie } from 'cookies-next'
import type { Children, Theme } from '@/types/generals.types';

export const ThemeContext = createContext({} as Theme)

export default function ThemeProvider({children}:Children){
  const [theme, setTheme] = useState<string>('light');

  const cookieTheme = getCookie('theme')

  const handleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = event.currentTarget;
    setTheme(name)
    setCookie('theme', name, {sameSite:'lax', secure:true})
  }

  useEffect(() => {
    if(cookieTheme){
      setTheme(cookieTheme)
    }
  },[cookieTheme])

  useEffect(() => {
    if(theme === 'dark'){
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
  },[theme])

  return <ThemeContext.Provider value={{theme, handleTheme}}>{children}</ThemeContext.Provider>
}

export function useTheme(){
  return useContext(ThemeContext)
}