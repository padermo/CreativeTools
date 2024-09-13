"use client";
import { useModal } from "@/context/ModalContext";
import FormReport from "./Forms/FormReport";
import Modal from "../Reusable/Modal";

export default function ReportModal() {
  const { isOpenModalReport, dataReportModal, handleModal } = useModal();

  if (isOpenModalReport) {
    return (
      <Modal
        title={dataReportModal.name.toUpperCase()}
        onClose={() => handleModal("report", { _id: "", name: "" })}
      >
        <FormReport
          _id={dataReportModal._id}
          name={dataReportModal.name}
          handleModal={handleModal}
        />
      </Modal>
    );
  }

  return null;
}
