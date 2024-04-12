import type { ChangeEvent, ClipboardEvent, ReactNode } from 'react';
import type { RadioChangeEvent } from 'antd';

export interface SelectOption{
  value:string;
  label:string;
}

export interface SelectReusableProps{
  id:string;
  value:string;
  options: [SelectOption];
  placeholder: string;
  onChange: (
    event: ChangeEvent<HTMLSelectElement>
  ) => void;
}

export interface RadioReusableProps{
  children: ReactNode;
  onChange: (e: RadioChangeEvent) => void;
}

export interface InputReusableProps {
  id: string;
  value: string;
  placeholder: string;
  type: 'password' | 'normal' | 'area';
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onPaste?: (event: ClipboardEvent<HTMLInputElement>) => void;
}

export interface LinkProps {
  href: string;
  text: string;
}