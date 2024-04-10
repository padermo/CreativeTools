'use client';
import { createContext, useState, useContext, useEffect } from 'react';
import { getCookie } from '@/app/actions';
import { decodeJwt } from 'jose';
import axiosConfig from '@/axios/axiosconfig';
import useSWR from 'swr';
import { getData } from '@/utils/fetch';

// types
import type { Children, Items, Pages, ContextItemsValues } from '@/types/generals.types';

export const ItemsContext = createContext({} as ContextItemsValues);

export default function ItemsProvider({ children }: Children) {
  const [items, setItems] = useState<Items[] | undefined>(undefined);
  const [pages, setPages] = useState<Pages | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const [selectedAccessType, setSelectedAccessType] = useState<string>('');
  const [selectedLiked, setSelectedLiked] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [favoriteItems, setFavoriteItems] = useState<Items[] | undefined>(undefined);

  const {data:dataItems, mutate:mutateItems} = useSWR('/item', getData);
  const {data:dataFavorite, mutate:mutateFavorite} = useSWR(userId && token ? `/favorite?userId=${userId}` : null, getData);

  const getToken = async () => {
    const cookie = await getCookie();
    if(cookie) setToken(cookie.value)
  }

  useEffect(()=>{
    getToken()
  },[])

  useEffect(()=>{
    if(token){
      const decode = decodeJwt(token)
      if(decode) setUserId(decode.id as string)
    }
  },[token])

  return (
    <ItemsContext.Provider value={{ items, pages, token, userId, favoriteItems, selectedCategory, setFavoriteItems, setItems, setPages, setSelectedCategory, setSelectedSubcategory, setSelectedAccessType, setSelectedLiked }}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems(){
  return useContext(ItemsContext)
}