
import Header from "./components/Header/Header";
import Spotlight from "./components/Spotlight/Spotlight";
import Footer from "./components/Footer/Footer";
import OtherArticles from "./components/OtherArticles/OtherArticles";
import SideBar from "./components/SideBar/SideBar";
import InteractiveMap from "./components/InteractiveMap/InteractiveMap";
import Books from "./components/Books/Books";
import Instagram from "./components/Instagram/Instagram";

export default function Home() {
  return (
    <main>
      <Header/>
     <Spotlight/>
      <InteractiveMap/>
      <section className="container-other">
        <div className="main-contents">
          <OtherArticles/>
          <Books/>
         <Instagram/>  
        </div>
        <aside>
          <SideBar/>
        </aside>
      </section>
      <Footer/>
    </main>
  );
}
