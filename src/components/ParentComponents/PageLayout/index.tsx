import ConfigThemeAnt from "../ConfigThemeAnt";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/Config/ScrollToTop";
import Consent from "@/components/Cookies/Consent";
import SessionsProvider from "@/components/Provider/SessionProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";

// types
import type { Children } from "@/types/generals.types";

export default function PageLayout({ children }: Children) {
  return (
    <AntdRegistry>
      <ConfigThemeAnt>
        <SessionsProvider>
          <header className="w-full absolute lg:fixed top-0 z-10 lg:bg-black/50 lg:backdrop-blur-sm lg:border-b lg:border-b-neutral-800">
            <Navbar />
          </header>
          <main className="max-w-screen-2xl m-auto text-white px-2">
            {children}
            <ScrollToTop />
            <Consent />
          </main>
          <Footer />
        </SessionsProvider>
      </ConfigThemeAnt>
    </AntdRegistry>
  );
}
