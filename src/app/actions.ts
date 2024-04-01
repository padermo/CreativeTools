'use server'
import { cookies } from 'next/headers'

export async function removeCookie(){
  cookies().delete('access')
}