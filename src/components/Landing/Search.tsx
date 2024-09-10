import { useTranslations } from "next-intl";
import Idea from "../SVG/Idea";

export default function Search() {
  const t = useTranslations("Content.Search");

  return (
    <article className="w-full min-h-dvh max-h-full search flex flex-wrap justify-center items-center text-white font-medium text-2xl text-center tracking-wider text-wrap px-4">
      <Idea />
      <div className="w-full m-auto lg:w-1/2">
        <h3>{t("title")}</h3>
      </div>
    </article>
  );
}
