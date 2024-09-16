import { useTranslations } from "next-intl";
import { useItems } from "@/context/ItemsContext";
import ButtonReusable from "@/components/Reusable/Button";
import Clear from "../Clear";
import CreateItemButton from "@/components/Items/Create/CreateItemButton";
import type { ClearProps } from "@/types/generals.types";

export default function Category({ getAllItems }: ClearProps) {
  const { handleCategory } = useItems();
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
            onClick={() => handleCategory(item.value)}
          />
        ))}
      <Clear getAllItems={getAllItems} />
      <CreateItemButton />
    </div>
  );
}
