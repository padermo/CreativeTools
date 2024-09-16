import { useTranslations } from "next-intl";
import { useItems } from "@/context/ItemsContext";
import SelectReusable from "@/components/Reusable/Select";
import { Form } from "antd";

export default function SubFilter() {
  const t = useTranslations("Tools");
  const { handleFilters } = useItems();

  return (
    <>
      <Form.Item name="accessType" className="flex-1 lg:flex-none">
        <SelectReusable
          placeholder={t("sections.accessType")}
          options={t.raw("accessType")}
          width="w-auto"
          onChange={(value) => handleFilters(value, "access")}
        />
      </Form.Item>
      <Form.Item name="liked" className="flex-1 lg:flex-none">
        <SelectReusable
          placeholder={t("sections.liked")}
          options={t.raw("liked")}
          width="w-auto"
          onChange={(value) => handleFilters(value, "popularity")}
        />
      </Form.Item>
    </>
  );
}
