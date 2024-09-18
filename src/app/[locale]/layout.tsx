import type { Metadata } from "next";
import type { RootLayout } from "@/types/generals.types";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import ModalProvider from "@/context/ModalContext";
import Favicon from "/public/favicon.ico";
import SessionsProvider from "@/components/Provider/SessionProvider";
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
      <body className={`${poppins.className} relative bg-black`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SessionsProvider>
            <ModalProvider>{children}</ModalProvider>
          </SessionsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
