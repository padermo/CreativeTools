import { ReactNode } from 'react';

export interface Children{
  children:ReactNode;
}

export interface RootLayout extends Children{
  params: {locale:string}
}