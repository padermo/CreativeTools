import type { Metadata } from "next";
import type { RootLayout } from "@/types/generals.types";
import { Poppins } from "next/font/google";
import ThemeProvider from "@/context/ThemeContext";
import SessionsProvider from "@/components/provider/SessionProvider";
import { NextIntlClientProvider, useMessages } from "next-intl";
import ModalProvider from "@/context/ModalContext";
import Favicon from "/public/favicon.ico";
import Navbar from "@/components/Navbar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@/styles/globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative Tools",
  description:
    "Herramientas de diseño, documentación y módulos para desarrolladores o diseñadores UX/UI.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
  params: { locale },
}: RootLayout) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body
        className={`${poppins.className} max-w-screen-2xl m-auto relative bg-gray-200 dark:bg-[#222]`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SessionsProvider>
            <ThemeProvider>
              <ModalProvider>
                <Navbar />
                {children}
              </ModalProvider>
            </ThemeProvider>
          </SessionsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
