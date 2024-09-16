import { useItems } from "@/context/ItemsContext";
import { useTranslations } from "next-intl";
import SelectReusable from "@/components/Reusable/Select";
import { Form } from "antd";

export default function Subcategory() {
  const { selectedCategory, handleSubcategory } = useItems();
  const t = useTranslations("Tools");

  if (selectedCategory) {
    return (
      <Form.Item name="subcategories" className="flex-1 lg:flex-none">
        <SelectReusable
          placeholder={t("sections.subcategory")}
          options={t.raw(`subcategories.${selectedCategory}`)}
          width="w-auto"
          onChange={handleSubcategory}
        />
      </Form.Item>
    );
  }

  return null;
}
