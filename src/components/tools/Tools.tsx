'use client';
import { useItems } from '@/context/ItemsContext';
import axiosConfig from '@/axios/axiosConfig';
import Pages from '../pagination/Pages';
import Card from '../card/Card';
import Filters from '../filters/Filters';
import CardSkeleton from '../fallbacks/CardSkeleton';
import NotData from '../svg/NotData';

export default function Tools() {
  return (
    <div className='flex flex-col w-full min-h-dvh max-h-full gap-4 justify-center items-center py-8'>
      <Filters/>
    </div>
  );
}
