'use client'
import Link from 'next/link'

export default function NotFound(){
  return(
    <html>
      <body className='w-full h-dvh flex flex-col justify-center items-center bg-gray-200 text-[#222]'>
        <h1 className='text-3xl font-bold'>Oops...</h1>
        <h2 className='text-lg'>Page Not Found</h2>
        <Link href={'/'} className='no-underline hover:underline'>Back To Home</Link>
      </body>
    </html>
  )
}