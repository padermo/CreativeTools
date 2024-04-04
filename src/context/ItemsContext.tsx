'use client';
import { createContext, useState, useContext, useEffect } from 'react';
import { getCookie } from '@/app/actions';
import { decodeJwt } from 'jose';
import axiosConfig from '@/axios/axiosconfig';

// types
import type { Children, Items, Pages, ContextItemsValues, CategoryResponse } from '@/types/generals.types';

export const ItemsContext = createContext({} as ContextItemsValues);

export default function ItemsProvider({ children }: Children) {
  const [items, setItems] = useState<Items[] | undefined>(undefined);
  const [pages, setPages] = useState<Pages | undefined>(undefined);
  const [category, setCategory] = useState<CategoryResponse[]>();
  const [userId, setUserId] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [favoriteItems, setFavoriteItems] = useState<Items[] | undefined>(undefined);

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

  const getFavorites = async () => {
    const resFavorite = await axiosConfig.get(`/favorite?userId=${userId}`, {headers: {'Authorization': `Bearer ${token}`}})
    setFavoriteItems(resFavorite.data);
  }
  
  useEffect(() => {
    if(token && userId){
      getFavorites()
    }
  },[token, userId])

  return (
    <ItemsContext.Provider value={{ items, pages, category, token, userId, favoriteItems, setFavoriteItems, setItems, setPages, setCategory, getFavorites }}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems(){
  return useContext(ItemsContext)
}