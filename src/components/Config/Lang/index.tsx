"use client";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
// types
import type { MenuProps } from "antd";

export default function Lang() {
  const t = useTranslations("Language");
  const pathname = usePathname();
  const router = useRouter();

  const handleChangeLang = (lang: "es" | "en") => {
    router.replace(pathname, { locale: lang, scroll: false });
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <button onClick={() => handleChangeLang("es")}>{t("spanish")}</button>
      ),
    },
    {
      key: "2",
      label: (
        <button onClick={() => handleChangeLang("en")}>{t("english")}</button>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <button className="text-[#888] hover:text-white">
        <GlobalOutlined />
      </button>
    </Dropdown>
  );
}
