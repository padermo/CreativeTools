import { useTranslations } from "next-intl";
import ButtonReusable from "@/components/Reusable/Button";
import Clear from "../Clear";
import CreateItemButton from "@/components/Items/Create/CreateItemButton";
import type { CategoryProps } from "@/types/generals.types";

export default function Category({
  handleResetSelect,
  handleResetCategory,
}: CategoryProps) {
  const t = useTranslations("Tools");

  return (
    <div className="flex flex-wrap items-center justify-start gap-2">
      {t
        .raw("categories")
        .map((item: { value: string; label: string }, index: number) => (
          <ButtonReusable
            key={index}
            text={item.label}
            htmlType="button"
            type="primary"
            onClick={() => handleResetCategory(item.value)}
          />
        ))}
      <Clear handleResetSelect={handleResetSelect} />
      <CreateItemButton />
    </div>
  );
}
