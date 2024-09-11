"use client";
import FormCard from "./FormCard";
import { CloseOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";
import { useModal } from "@/context/ModalContext";

export default function CreateModal() {
  const { handleModal, isOpenModalCreate } = useModal();
  const t = useTranslations("CreateItem");

  if (isOpenModalCreate) {
    return (
      <div className="w-full h-dvh flex flex-col justify-center items-center bg-black/50 fixed top-0 left-0 z-20">
        <div className="rounded-lg shadow-xl border border-neutral-800 w-[90%] bg-[#111] p-3 flex flex-col gap-2 justify-center md:w-1/2 lg:w-2/6">
          <div className="flex justify-end">
            <button
              onClick={() => handleModal("create")}
              className="text-[#888] transition-colors duration-300 ease-in-out hover:text-white"
            >
              <CloseOutlined />
            </button>
          </div>
          <p className="text-lg font-semibold text-center">{t("title")}</p>
          <FormCard handleModal={handleModal} />
        </div>
      </div>
    );
  }

  return null;
}
