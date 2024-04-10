import type {
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import type { ButtonType } from 'antd/es/button';
import type { SelectOption } from '@/components/reusable/types';

export interface Children {
  children: ReactNode;
}

export interface RootLayout extends Children {
  params: { locale: string };
}

export interface UserMenuProps {
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
  _id: string;
  name: string;
  url: string;
  category: string;
  subcategory: string;
  liked: string[];
  score: number;
  isFree: boolean;
  createDate: Date;
  handleScore: (itemId: string) => void;
  handleFavorite: (itemId: string) => void;
  handleModal: (id: string, name: string) => void;
}

export interface Pages {
  totalPages: number | undefined;
  totalItems: number | undefined;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export interface ContextItemsValues {
  items: Items[] | undefined;
  pages: Pages | undefined;
  token: string;
  userId: string;
  selectedCategory: string;
  favoriteItems: Items[] | undefined;
  setItems: Dispatch<SetStateAction<Items[] | undefined>>;
  setPages: Dispatch<SetStateAction<Pages | undefined>>;
  setFavoriteItems: Dispatch<SetStateAction<Items[] | undefined>>;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  setSelectedSubcategory: Dispatch<SetStateAction<string>>;
  setSelectedAccessType: Dispatch<SetStateAction<string>>;
  setSelectedLiked: Dispatch<SetStateAction<string>>;
}

export interface ItemId {
  itemId: string;
}

export interface ScoreProps extends ItemId {
  score: number;
  liked: string[];
  handleScore: (itemId: string) => void;
}

export interface FavoriteProps extends ItemId {
  handleFavorite: (itemId: string) => void;
}

export interface StatusFreeProps {
  isFree: boolean;
  free: string;
  pay: string;
}

export interface OptionsProps {
  id: string;
  name: string;
  handleModal: (id: string, name: string) => void;
}

export interface FilterProps {
  setSelectCategory: Dispatch<SetStateAction<string>>;
  setSelectSubcategory: Dispatch<SetStateAction<string>>;
  setAccessType: Dispatch<SetStateAction<boolean | undefined>>;
  handleCreateModal: () => void;
}

export interface CategoryProps {
  category: string[];
  handleCategory: (index: number) => void;
}

export interface ComplementFilters {
  title: string;
  list: string[];
}

export interface SubcategoryProps {
  title: string;
  list: string[];
  onClick: (index: number) => void;
}

export interface SubFiltersProps {
  title: string;
  tagsData: SelectOption[]
  onClick: Dispatch<SetStateAction<string>>;
}

export interface CategoryResponse {
  category: string;
  subcategories: string[];
}

export interface InputProps {
  email: string;
  password: string;
}

export interface InputWatchProps extends InputProps {
  confirm_password: string;
}

export interface FormReportInputs {
  description: string;
}

export interface DataReportItem {
  id: string;
  name: string;
}

export interface ReportModalProps extends DataReportItem {
  isViewModal: boolean;
  handleModal: (id: string, name: string) => void;
}

export interface FormReportProps extends DataReportItem {
  handleModal: (id: string, name: string) => void;
}

export interface FormContactInputs {
  to: string;
  content: string;
}

export interface FormContactProps{
  handleModal: () => void;
}

export interface FormCardInputs{
  name:string;
  url:string;
  category:string;
  subcategory:string;
  isFree:boolean;
}

export type SubcategoryKeys = 'documents'|'resources'|'modules';