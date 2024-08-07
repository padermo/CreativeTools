'use client'
import { Link } from '@/navigation';
import type { LinkProps } from './types';

export default function LinkReusable({text, href}:LinkProps){

  return <Link href={href} className='flex no-underline text-lg font-light text-[#222] transition-colors duration-150 ease-linear dark:text-white hover:text-[#9337A5] dark:hover:text-[#9337A5]'>{text}</Link>
}