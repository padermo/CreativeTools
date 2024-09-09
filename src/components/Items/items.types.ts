import type { ItemId } from "@/types/generals.types";
import type { StateItems } from "@/types/context.types";

export interface ShareProps {
  title: string;
  url: string;
}

export interface ScoreProps extends ItemId {
  score: number;
  liked: string[];
}

export interface StatusFreeProps {
  isFree: string;
  free: string;
  pay: string;
}

export interface ReportProps {
  _id: string;
  name: string;
}

export interface FavoriteProps extends ItemId { }

export type CardProps = Omit<StateItems, 'category'|'subcategory'>;

export interface FormCardInputs {
  name: string;
  url: string;
  category: string;
  subcategory: string;
  isFree: boolean;
}
