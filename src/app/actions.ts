'use server'
import { cookies } from 'next/headers'

export async function removeCookie(){
  cookies().delete('access')
}

export async function getCookie(){
  return cookies().get('access')
}