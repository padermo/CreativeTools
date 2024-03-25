import type { ReactNode } from 'react';
import type { ButtonType } from 'antd/es/button';

export interface Children{
  children:ReactNode;
}

export interface RootLayout extends Children{
  params: {locale:string}
}

export interface NavbarProps{
  texts: (key:string) => string;
}

export interface LinkProps{
  href:string;
  text:string;
}

export interface ButtonProps extends Children{
  onClick: () => void;
  type: ButtonType;
}