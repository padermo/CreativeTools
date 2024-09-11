"use client";
import { useTranslations } from "next-intl";
import { useModal } from "@/context/ModalContext";
import Modal from "../Reusable/Modal";
import FormContact from "./Forms/FormContact";

export default function ContactModal() {
  const { isOpenModalContact, handleModal } = useModal();
  const t = useTranslations("Contact");

  if (isOpenModalContact) {
    return (
      <Modal title={t("title")} onClose={() => handleModal("contact")}>
        <FormContact handleModal={handleModal} />
      </Modal>
    );
  }

  return null;
}
