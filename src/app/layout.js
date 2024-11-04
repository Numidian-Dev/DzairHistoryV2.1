import { Inter } from "next/font/google";
import "./globals.scss";
import {
  GoogleAnalytics,
  GoogleTagManager,
  Goo,
} from "@next/third-parties/google";
import CookieConsent from "./components/CookiesConsent/CookiesConsent";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dzair History",
  description:
    "Découvrez l'histoire et la culture de l'Algérie sur notre site. Explorez les grandes étapes de l'histoire de ce pays fascinant, depuis les premiers habitants jusqu'à aujourd'hui. Découvrez également les différentes cultures et civilisations qui ont influencé l'Algérie au fil des siècles. Faites un voyage dans le temps et en apprenez davantage sur l'histoire de l'Algérie.",
  openGraph: {
    images: ["https://dzairhistory.com/img/meta/acceuil_meta_og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <GoogleAnalytics gaId="G-7MKNM1FX1N" />
      <GoogleTagManager gtmId="GTM-K8M53XZ" />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4426518773218222"
        crossorigin="anonymous"></Script>
      <body className={inter.className}>
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
