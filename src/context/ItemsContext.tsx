'use client';
import { createContext, useState, useContext, useEffect } from 'react';
import { getCookie } from '@/app/actions';
import { decodeJwt } from 'jose';
import { getData } from '@/utils/fetch';
import useSWR from 'swr';

// types
import type { Children } from '@/types/generals.types';
import type { StatePages, StateItems, ContextItemsValues } from '@/types/context.types';

export const ItemsContext = createContext({} as ContextItemsValues);

export default function ItemsProvider({ children }: Children) {
  const [items, setItems] = useState<StateItems[]>([{
    _id:'',
    name: '',
    url: '',
    category: '',
    subcategory: '',
    score: 0,
    isFree: '',
    liked: ['']
  }]);
  const [pages, setPages] = useState<StatePages>({
    totalItems: 0,
    totalPages: 0
  });
  const [favoriteItems, setFavoriteItems] = useState<StateItems[]>([{
    _id:'',
    name: '',
    url: '',
    category: '',
    subcategory: '',
    score: 0,
    isFree: '',
    liked: ['']
  }]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const [selectedAccessType, setSelectedAccessType] = useState<string>('');
  const [selectedLiked, setSelectedLiked] = useState<string>('');
  const [selectedPage, setSelectedPage] = useState<number>(1)
  const [userId, setUserId] = useState<string>('');
  const [token, setToken] = useState<string>('');

  const {data:dataItems, mutate:mutateItems, isLoading:loadingItems} = useSWR(`/item?category=${selectedCategory}&subcategory=${selectedSubcategory}&type=${selectedAccessType}&liked=${selectedLiked}&page=${selectedPage}`, getData);
  const {data:dataFavorite, mutate:mutateFavorite, isLoading:loadingFavorites} = useSWR(userId && token ? `/favorite?userId=${userId}` : null, (url) => getData(url, token));

  const getToken = async () => {
    const cookie = await getCookie();
    if(cookie) setToken(cookie.value)
  }

  const getAllItems = () => {
    setSelectedCategory('')
    setSelectedSubcategory('')
    setSelectedAccessType('')
    setSelectedLiked('')
    mutateItems()
  }

  const handleCategory = (value:string) => {
    setSelectedCategory(value);
    if(selectedSubcategory || selectedLiked || selectedAccessType){
      setSelectedSubcategory('')
      setSelectedLiked('')
      setSelectedAccessType('')
      mutateItems()
    }
  }

  useEffect(() => {
    getToken()
  },[])

  useEffect(() => {
    if(token){
      const decode = decodeJwt(token)
      if(decode) setUserId(decode.id as string)
    }
  },[token])

  useEffect(() => {
    if(dataItems) {
      setItems(dataItems.items);
      setPages(dataItems.config);
    }
  },[dataItems])

  useEffect(() => {
    if(dataFavorite) setFavoriteItems(dataFavorite);
  },[dataFavorite])

  return (
    <ItemsContext.Provider value={{ items, pages, token, userId, favoriteItems, selectedCategory, loadingItems, loadingFavorites, setSelectedCategory, setSelectedSubcategory, setSelectedAccessType, setSelectedLiked, setSelectedPage, handleCategory, getAllItems, mutateFavorite, mutateItems }}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems(){
  return useContext(ItemsContext)
}