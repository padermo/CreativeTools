import { NextRequest } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import createMiddleware from 'next-intl/middleware';
import { locales } from './navigation';
 
const publicPages = ['/', '/auth/login', '/auth/register', '/tools', '/auth/recovery'];

const intMiddleware = createMiddleware({
  locales,
  localePrefix: 'as-needed',
  defaultLocale: 'en'
});

const authMiddleware = withAuth(
  (req) => intMiddleware(req),
  {
    callbacks: {
      authorized: ({token}) => token !== null
    },
    pages: {
      signIn: '/auth/login'
    }
  }
)

export default async function middleware(req:NextRequest){
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join('|')}))?(${publicPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i'
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if(isPublicPage){
    return intMiddleware(req)
  } else {
    return (authMiddleware as any)(req)
  }
}
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};