import { getServerSession } from 'next-auth';
import auth from '@/auth';
import { redirect } from 'next/navigation';

import type { Children } from '@/types/generals.types';

export default async function ValidateSession({children}:Children){
  const session = await getServerSession(auth);
  console.log('session', session)
  if(!session){
    return <>{children}</>
  }

  return redirect('/')
}