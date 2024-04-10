export type TypeModal = 'create'|'report'|'contact';

export interface HandlerModalFunction{
  handleModal: (type:TypeModal) => void;
}

export interface ModalContextValues extends HandlerModalFunction{
  isOpenModalCreate:boolean;
  isOpenModalReport:boolean;
  isOpenModalContact:boolean;
}