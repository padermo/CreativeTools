import { useTranslations } from "next-intl";
import ButtonReusable from "@/components/Reusable/Button";
import type { ClearProps } from "@/types/generals.types";

export default function Clear({ handleResetSelect }: ClearProps) {
  const t = useTranslations("Tools");

  return (
    <ButtonReusable
      text={t("all")}
      htmlType="button"
      type="primary"
      onClick={handleResetSelect}
    />
  );
}
