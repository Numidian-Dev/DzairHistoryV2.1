import Head from 'next/head';
import Script from 'next/script';
import { Inter } from "next/font/google";
import "./globals.scss";
import {
  GoogleAnalytics,
  GoogleTagManager,
} from "@next/third-parties/google";
import CookieConsent from "./components/CookiesConsent/CookiesConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dzair History",
  description: "Découvrez l'histoire et la culture de l'Algérie...",
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
      <Head>
        <link rel="stylesheet" id="silktide-consent-manager-css" href="/silktide-consent-manager.css"/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4426518773218222"
          crossOrigin="anonymous"></script>
      </Head>

      <GoogleAnalytics gaId="G-7MKNM1FX1N" />
      <GoogleTagManager gtmId="GTM-K8M53XZ" />

      <body className={inter.className}>
         <CookieConsent /> 
{/* 
        
        <Script
          src="/silktide-consent-manager.js"
          strategy="afterInteractive"
          id="silktide-main-script"
        />

       
        <Script id="silktide-config" strategy="afterInteractive">
          {`
            // Attendre que Silktide soit chargé
            function waitForSilktide(callback, maxTime = 5000) {
              const startTime = Date.now();
              
              function check() {
                if (typeof silktideCookieBannerManager !== 'undefined') {
                  callback();
                } else if (Date.now() - startTime < maxTime) {
                  setTimeout(check, 100);
                } else {
                  console.error('Silktide non chargé après ' + maxTime + 'ms');
                }
              }
              
              check();
            }
            
            waitForSilktide(function() {
              try {
                silktideCookieBannerManager.updateCookieBannerConfig({
                  background: { showBackground: true },
                  cookieIcon: { position: "bottomLeft" },
                  cookieTypes: [
                    {
                      id: "necessary",
                      name: "Nécessaires",
                      description: "Cookies essentiels.",
                      required: true,
                      onAccept: function() {
                        console.log('Nécessaires acceptés');
                      }
                    },
                    {
                      id: "analytics",
                      name: "Analytics",
                      description: "Pour améliorer le site.",
                      required: false,
                      onAccept: function() {
                        if (typeof gtag === 'function') {
                          gtag('consent', 'update', { 'analytics_storage': 'granted' });
                        }
                      }
                    },
                    {
                      id: "advertising",
                      name: "Publicité",
                      description: "Cookies publicitaires.",
                      required: false,
                      onAccept: function() {
                        if (typeof gtag === 'function') {
                          gtag('consent', 'update', { 'ad_storage': 'granted' });
                        }
                      }
                    }
                  ],
                  text: {
                    banner: {
                      description: "<p>Nous utilisons des cookies pour rendre votre visite plus agréable, vous proposer du contenu personnalisé et mieux comprendre votre utilisation du site. <a href='https://dzairhistory.com/legal/politique-des-cookies' target='_blank'>Politiques des cookies</a></p>",
                      acceptAllButtonText: "Tout accepter",
                      rejectNonEssentialButtonText: "Tout refuser"
                    }
                  },
                  position: { banner: "bottomLeft" }
                });
                console.log('Silktide configuré');
              } catch (error) {
                console.error('Erreur Silktide:', error);
              }
            });
          `}
        </Script> */}

        {children}
      </body>
    </html>
  );
}