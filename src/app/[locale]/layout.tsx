import type { Metadata } from 'next';
import type { RootLayout } from '@/types/generals.types';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Creative Tools',
  description:
    'Herramientas de diseño, documentación y modulos para desarrolladores.',
};

export default function RootLayout({
  children,
  params: { locale },
}: RootLayout) {
  const messages = useMessages()
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar/>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
