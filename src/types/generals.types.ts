import type { ReactNode, Dispatch, SetStateAction, ChangeEvent, ClipboardEvent } from 'react';
import type { ButtonType } from 'antd/es/button';
import type { FieldError } from 'react-hook-form';
import type { KeyedMutator } from 'swr';

export interface Children {
  children: ReactNode;
}

export interface RootLayout extends Children {
  params: { locale: string };
}

export interface UserMenuProps{
  locale: string;
  logout: () => void;
}

export interface NavbarProps extends UserMenuProps {
  texts: (key: string) => string;
}

export interface LinkProps {
  href: string;
  text: string;
}

export interface ButtonProps extends Children {
  onClick: () => void;
  type: ButtonType;
  loading: boolean;
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
  liked: string[];
  score:number;
  isFree:boolean;
  createDate:Date;
  handleScore: (itemId:string) => void;
  handleFavorite: (itemId:string) => void;
  handleModal: (id:string, name:string) => void;
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
  token:string;
  userId:string;
  favoriteItems: Items[] | undefined;
  setItems: Dispatch<SetStateAction<Items[] | undefined>>;
  setPages: Dispatch<SetStateAction<Pages | undefined>>; 
  setCategory: Dispatch<SetStateAction<CategoryResponse[] | undefined>>
  setFavoriteItems: Dispatch<SetStateAction<Items[] | undefined>>
  getFavorites: ()=>void;
}

export interface ItemId{
  itemId:string;
}

export interface ScoreProps extends ItemId{
  score:number;
  liked:string[];
  handleScore: (itemId:string) => void;
}

export interface FavoriteProps extends ItemId{
  handleFavorite: (itemId:string) => void;
}

export interface StatusFreeProps{
  isFree:boolean;
  free:string;
  pay:string;
}

export interface OptionsProps{
  id:string;
  name:string;
  handleModal: (id:string, name:string) => void;
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

export interface InputReusableProps{
  id: string;
  error: FieldError | undefined;
  value: string;
  placeholder: string;
  type: 'password' | 'normal' | 'area';
  onChange: (event:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void;
  onPaste?: (event:ClipboardEvent<HTMLInputElement>) => void;
}

export interface InputProps{
  email:string;
  password:string;
}

export interface InputWatchProps extends InputProps{
  confirm_password:string;
}

export interface FormReportInputs{
  description:string;
}

export interface DataReportItem{
  id:string;
  name:string;
}

export interface ReportModalProps extends DataReportItem{
  isViewModal:boolean;
  handleModal: (id:string, name:string) => void;
}

export interface FormReportProps extends DataReportItem{
  handleModal: (id:string, name:string) => void;
}