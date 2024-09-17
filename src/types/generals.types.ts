import type { ReactNode, Dispatch, SetStateAction } from "react";
import type { ButtonType } from "antd/es/button";
import type { SelectOption } from "@/components/Reusable/types";
import type { HandlerModalFunction, SetDataReportModal } from "./context.types";

export interface Children {
  children: ReactNode;
}

export interface RootLayout extends Children {
  params: { locale: string };
}

export interface ButtonProps extends Children {
  onClick: () => void;
  type: ButtonType;
  loading: boolean;
}

export interface ItemId {
  _id: string;
}

export interface FilterProps {
  setSelectCategory: Dispatch<SetStateAction<string>>;
  setSelectSubcategory: Dispatch<SetStateAction<string>>;
  setAccessType: Dispatch<SetStateAction<boolean | undefined>>;
  handleCreateModal: () => void;
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
  tagsData: SelectOption[];
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

export interface FormReportProps
  extends SetDataReportModal,
  HandlerModalFunction { }

export interface FormContactInputs {
  to: string;
  content: string;
}

export interface FormContactProps extends HandlerModalFunction { }

export type SubcategoryKeys = "documents" | "resources" | "modules";

export interface ClearProps {
  handleResetSelect: () => void;
}

export interface CategoryProps extends ClearProps {
  handleResetCategory: (value: string) => void;
}
