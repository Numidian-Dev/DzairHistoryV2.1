
import { Inter } from "next/font/google";
import "./globals.scss";




const inter = Inter({ subsets: ["latin"] });

 export const metadata = {
  title: "Dzair History",
  description: "Découvrez l'histoire et la culture de l'Algérie sur notre site. Explorez les grandes étapes de l'histoire de ce pays fascinant, depuis les premiers habitants jusqu'à aujourd'hui. Découvrez également les différentes cultures et civilisations qui ont influencé l'Algérie au fil des siècles. Faites un voyage dans le temps et en apprenez davantage sur l'histoire de l'Algérie.", 
  openGraph: {
    images: ["https://dzairhistory.com/img/meta/acceuil_meta_og.png"],
  },
}; 

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
