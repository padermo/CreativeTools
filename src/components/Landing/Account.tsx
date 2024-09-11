"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";
import ButtonReusable from "../Reusable/Button";
import Join from "../SVG/Join";

export default function Account() {
  const t = useTranslations("Content.Account");
  const router = useRouter();

  return (
    <article className="w-full min-h-dvh max-h-full search flex flex-wrap lg:flex-row-reverse justify-center items-center text-white font-medium text-2xl text-center tracking-wider text-wrap px-4">
      <Join />
      <div className="w-full m-auto lg:w-1/2">
        <h3 className="mb-4">{t("title")}</h3>
        <ButtonReusable
          text={t("cta")}
          htmlType="button"
          type="primary"
          loading={false}
          onClick={() => router.push("/auth/register")}
        />
      </div>
    </article>
  );
}
