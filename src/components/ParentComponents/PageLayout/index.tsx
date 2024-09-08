import ConfigThemeAnt from "../ConfigThemeAnt";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/Config/ScrollToTop";
import { AntdRegistry } from "@ant-design/nextjs-registry";

// types
import type { Children } from "@/types/generals.types";

export default function PageLayout({ children }: Children) {
  return (
    <AntdRegistry>
      <ConfigThemeAnt>
        <header className="w-full fixed top-0 z-10 bg-black/50 backdrop-blur-sm border-b border-b-neutral-800">
          <Navbar />
        </header>
        <main className="max-w-screen-xl m-auto text-white">
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </ConfigThemeAnt>
    </AntdRegistry>
  );
}
