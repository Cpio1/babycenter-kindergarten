import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { siteConfig } from "@/lib/site";
import { publicFileExists } from "@/lib/files";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Logo } from "@/components/layout/Logo";
import "./globals.css";

// Округлый шрифт с поддержкой кириллицы и казахских букв (cyrillic-ext: ә, ғ, қ, ң, ө, ұ, ү, һ, і)
const nunito = Nunito({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.fullName,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.fullName,
    description: siteConfig.description,
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const hasLogo = publicFileExists(siteConfig.logo);

  return (
    <html lang="ru" className={nunito.variable}>
      <body className="font-sans">
        {/* Язык по умолчанию — русский; выбор RU / KZ хранится в localStorage */}
        <LanguageProvider>
          <Header logo={<Logo hasLogo={hasLogo} />} />
          {children}
          <Footer logo={<Logo hasLogo={hasLogo} />} />
        </LanguageProvider>
      </body>
    </html>
  );
}
