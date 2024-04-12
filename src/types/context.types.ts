import type { Dispatch, JSXElementConstructor, ReactElement, SetStateAction } from 'react';
import type { KeyedMutator } from 'swr';

export type TypeModal = 'create'|'report'|'contact';

export interface HandlerModalFunction{
  handleModal: (type:TypeModal, report?:SetDataReportModal) => void;
}

export interface ModalContextValues extends HandlerModalFunction{
  isOpenModalCreate:boolean;
  isOpenModalReport:boolean;
  isOpenModalContact:boolean;
  dataReportModal: SetDataReportModal;
}

export interface SetDataReportModal{
  _id:string;
  name:string;
}

export interface StateItems {
  _id: string;
  name: string;
  url: string;
  category: string;
  subcategory: string;
  liked: string[];
  score: number;
  isFree: string;
}

export interface StatePages {
  totalPages: number;
  totalItems: number;
}

export interface ContextItemsValues {
  items: StateItems[];
  pages: StatePages;
  token: string;
  userId: string;
  selectedCategory: string;
  favoriteItems: StateItems[];
  setItems: Dispatch<SetStateAction<StateItems[]>>;
  setPages: Dispatch<SetStateAction<StatePages>>;
  setFavoriteItems: Dispatch<SetStateAction<StateItems[]>>;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  setSelectedSubcategory: Dispatch<SetStateAction<string>>;
  setSelectedAccessType: Dispatch<SetStateAction<string>>;
  setSelectedLiked: Dispatch<SetStateAction<string>>;
  setSelectedPage: Dispatch<SetStateAction<number>>;
  handleCategory: (value:string) => void;
  getAllItems: () => void;
  mutateFavorite: KeyedMutator<any>;
  mutateItems: KeyedMutator<any>;
}

export interface MessageAlert{
  type: 'success' | 'info' | 'warning' | 'error';
  content:string;
}

export interface AlertContextValues{
  contextHolder: ReactElement<any, string | JSXElementConstructor<any>>;
  handleAlert:({type,content}:MessageAlert)=>void;
}