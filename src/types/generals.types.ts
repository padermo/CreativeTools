import type { ReactNode, Dispatch, SetStateAction } from 'react';
import type { ButtonType } from 'antd/es/button';

export interface Children {
  children: ReactNode;
}

export interface RootLayout extends Children {
  params: { locale: string };
}

export interface NavbarProps {
  texts: (key: string) => string;
  locale: string;
}

export interface LinkProps {
  href: string;
  text: string;
}

export interface ButtonProps extends Children {
  onClick: () => void;
  type: ButtonType;
}

export interface Theme {
  theme: string;
  handleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface Items {
  _id:string;
  name: string;
  url: string;
  category: string;
  subcategory: string;
  score:number;
  isFree:boolean;
  createDate:Date;
}

export interface Pages {
  totalPages:number|undefined;
  totalItems:number|undefined;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export interface ContextItemsValues{
  items: Items[] | undefined;
  pages: Pages | undefined;
  category: CategoryResponse[] | undefined;
  setItems: Dispatch<SetStateAction<Items[] | undefined>>;
  setPages: Dispatch<SetStateAction<Pages | undefined>>; 
  setCategory: Dispatch<SetStateAction<CategoryResponse[] | undefined>>
}

export interface ScoreProps{
  score:number;
}

export interface StatusFreeProps{
  isFree:boolean;
  free:string;
  pay:string;
}

export interface OptionsProps{
  report:string;
  favorite:string;
  tooltip:string;
}

export interface FilterProps{
  setSelectCategory: Dispatch<SetStateAction<string>>;
  setSelectSubcategory: Dispatch<SetStateAction<string>>;
  setAccessType: Dispatch<SetStateAction<boolean|undefined>>
}

export interface CategoryProps{
  category:string[];
  handleCategory: (index:number) => void;
}

export interface ComplementFilters{
  title:string;
  list:string[];
}

export interface SubcategoryProps{
  title:string;
  list:string[];
  onClick: (index:number) => void;
}

export interface SubfiltersProps{
  title:string;
  optionOne:string;
  optionTwo:string;
  onClick: (content:boolean) => void;
}

export interface CategoryResponse{
  category:string;
  subcategories: string[];
}