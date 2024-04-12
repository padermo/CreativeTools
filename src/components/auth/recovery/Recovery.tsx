'use client';
import { useState } from 'react';
import { useAlert } from '@/context/AlertContext';
import FormEmail from '../forms/FormEmail';
import FormPassword from '../forms/FormPassword';

export default function Recovery() {
  const [viewFormPassword, setViewFormPassword] = useState<boolean>(false);
  const { contextHolder } = useAlert();

  return (
    <>
      {viewFormPassword ? <FormPassword /> : <FormEmail setViewFormPassword={setViewFormPassword} />}
      {contextHolder}
    </>
  );
}
