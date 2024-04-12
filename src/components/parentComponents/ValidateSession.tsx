import { getSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import type { Children } from '@/types/generals.types';

export default async function ValidateSession({children}:Children){
  const session = await getSession();
  if(!session){
    return <>{children}</>
  }

  return redirect('/')
}