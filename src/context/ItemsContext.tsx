'use client';
import { createContext, useState, useContext } from 'react';

// types
import type { Children, Items, Pages, ContextItemsValues, CategoryResponse } from '@/types/generals.types';

export const ItemsContext = createContext({} as ContextItemsValues);

export default function ItemsProvider({ children }: Children) {
  const [items, setItems] = useState<Items[] | undefined>(undefined);
  const [pages, setPages] = useState<Pages | undefined>(undefined);
  const [category, setCategory] = useState<CategoryResponse[]>()

  return (
    <ItemsContext.Provider value={{ items, pages, category, setItems, setPages, setCategory }}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems(){
  return useContext(ItemsContext)
}