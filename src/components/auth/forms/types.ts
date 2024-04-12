import type { Dispatch, SetStateAction } from 'react';

export interface InputsFormEmail{
  email:string;
}

export interface FormEmailProps{
  setViewFormPassword: Dispatch<SetStateAction<boolean>>
}

export interface InputsFormPassword{
  password:string;
  confirm_password:string;
}