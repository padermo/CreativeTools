import type { Metadata } from 'next';
import type { RootLayout } from '@/types/generals';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Creative Tools',
  description: 'Herramientas de diseño, documentación y modulos para desarrolladores.',
};

export default function RootLayout({children, params:{locale}}:RootLayout) {
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
