"use client"
import react,{useEffect} from "react";
import Script from "next/script";
import TitleSection from "../../titleSection/TitleSection";

const Sidebar = () => {
   useEffect(() => {
      if (typeof window !== "undefined") {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("Adsense error", e);
        }
      }
    }, []);
  return (
    <aside className="aside-categorie">
      <div className="sidebar-categorie">
        <div className="pub">
          <div className="sidebar-ads-title">
            <TitleSection title={"Ads"} />
          </div>
          <div id="script-pub">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4426518773218222"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4426518773218222"
          data-ad-slot="2411959502"
          data-ad-format="auto"
          data-full-width-responsive="true"
          
        ></ins>
      </div>
        </div>
        {/*    <Carousel/> */}
      </div>
    </aside>
  );
};

export default Sidebar;
