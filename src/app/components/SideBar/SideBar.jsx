import Script from "next/script";
import TitleSection from "../titleSection/TitleSection";

const SideBar = () => {
  return (
    <section className="aside">
      <TitleSection title={"Ads"} backgroundColor={"#151414"} />
        <div id="script-pub">
          <Script
            id="test-id"
            async="async"
            data-cfasync="false"
            src="//pl18195204.highrevenuegate.com/c1ae8d1ce9929d8adb4afa2c5b3581ef/invoke.js"
          />
          <div id="container-c1ae8d1ce9929d8adb4afa2c5b3581ef"></div>
      </div>
    </section>
  );
};
export default SideBar;
