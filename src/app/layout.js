
import { Inter } from "next/font/google";
import "./globals.scss";




const inter = Inter({ subsets: ["latin"] });

 export const metadata = {
  title: "Dzair History",
  description: "Découvrez l'histoire et la culture de l'Algérie sur notre site. Explorez les grandes étapes de l'histoire de ce pays fascinant, depuis les premiers habitants jusqu'à aujourd'hui. Découvrez également les différentes cultures et civilisations qui ont influencé l'Algérie au fil des siècles. Faites un voyage dans le temps et en apprenez davantage sur l'histoire de l'Algérie.", 
}; 

export default function RootLayout({ children, pageTitle }) {
  
  return (
    <html lang="en">
       <head>
        <meta
          name="a.validate.02"
          content="ZRRrosKLNVZzVgr7ZUjkxNL24TpqaQ0SlVzN"
        />
        <meta name="google-adsense-account" content="ca-pub-4426518773218222" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4426518773218222"
          crossorigin="anonymous"
        ></script>
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/logo192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/logo512.png"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="855" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
