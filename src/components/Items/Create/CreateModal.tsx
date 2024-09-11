"use client";
import { useTranslations } from "next-intl";
import { useModal } from "@/context/ModalContext";
import Modal from "@/components/Reusable/Modal";
import FormCard from "./FormCard";

export default function CreateModal() {
  const { handleModal, isOpenModalCreate } = useModal();
  const t = useTranslations("CreateItem");

  if (isOpenModalCreate) {
    return (
      <Modal title={t("title")} onClose={() => handleModal("create")}>
        <FormCard handleModal={handleModal} />
      </Modal>
    );
  }

  return null;
}
