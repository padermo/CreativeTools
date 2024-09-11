import { CloseOutlined } from "@ant-design/icons";
import type { ModalProps } from "../types";

export default function Modal({ title, children, onClose }: ModalProps) {
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center bg-black/50 fixed top-0 left-0 z-20">
      <div className="rounded-md border border-neutral-800 shadow-xl w-[90%] bg-[#111] p-3 flex flex-col gap-2 justify-center md:w-1/2 lg:w-2/6">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-[#888] transition-colors duration-300 ease-in-out hover:text-white"
          >
            <CloseOutlined />
          </button>
        </div>
        <p className="text-lg font-semibold text-center">{title}</p>
        {children}
      </div>
    </div>
  );
}
