'use client'
import { SessionProvider } from 'next-auth/react'
import type { Children } from '@/types/generals.types'

export default function SessionsProvider({children}:Children){
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}