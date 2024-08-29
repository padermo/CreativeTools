import ConfigThemeAnt from "./ConfigThemeAnt";
import type { Children } from "@/types/generals.types";

export default function PageLayout({ children }: Children) {
  return (
    <section className="w-full min-h-dvh max-h-full bg-gray-200 px-4 md:px-6 lg:px-8 lg:pt-11 dark:bg-[#222]">
      {children}
    </section>
  );
}
