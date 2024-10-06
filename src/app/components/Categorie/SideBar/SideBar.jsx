import react from "react";
import Script from "next/script";
import TitleSection from "../../titleSection/TitleSection";

const Sidebar = () => {
  return (
    <aside className="aside-categorie">
      <div className="sidebar-categorie">
        <div className="pub">
          <div className="sidebar-ads-title">
            <TitleSection title={"Ads"} />
          </div>
          <div id="script-pub">
            <Script
              id="test-id"
              async="async"
              data-cfasync="false"
              src="//pl18195204.highrevenuegate.com/c1ae8d1ce9929d8adb4afa2c5b3581ef/invoke.js"
            />
            <div id="container-c1ae8d1ce9929d8adb4afa2c5b3581ef"></div>
          </div>
        </div>
        {/*    <Carousel/> */}
      </div>
    </aside>
  );
};

export default Sidebar;
