import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

export async function generateMetadata({ params, searchParams }, parent) {
    const id = params.article;
  
    const metaImg = `https://dzairhistory.com/img/meta/acceuil_meta_og.png`;
    return {
      title: "A propos de nous",
      description: "Dzair History a pour objectif de partager l'histoire et la culture Algérienne avec les Algériens avant tout, pour qu'ils puissent se réapproprier leurs histoires, mais aussi pour tous ceux qui voudraient découvrir l'histoire et la culture Algérienne.",
       openGraph: {
        images: [metaImg],
      }, 
    };
  }
const About = () => {
  return (
    <>
      <Header />
      <section className="aPropos">
        <h1 className="title-article">A propos de nous</h1>
        <hr className="title-hr" />
        <section className="container-article">
          <article>
            <h1>Qui somme nous ?</h1>
            <p>
              <span className="firstP">D</span>zair History a pour objectif de
              partager l'histoire et la culture Algérienne avec les Algériens
              avant tout, pour qu'ils puissent se réapproprier leurs histoires,
              mais aussi pour tous ceux qui voudraient découvrir l'histoire et
              la culture Algérienne.
            </p>
            <br />
            <p>
              Notre site a pour ambition de référencer tout le patrimoine
              matériel et immatériel de l'histoire et la culture Algérienne.
            </p>
            <br />
            <p>
              Si vous rencontrez une erreur ou un problème ou si vous souhaitez
              tout simplement nous soumettre des idées, nous serons tés heureux
              de lire vos messages, pour cela vous pouvez nous contacter
              <Link style={{marginLeft: 5 }} href="/contact">
                ici
              </Link>
              . J'espère que vous prendrez plaisir à découvrir notre histoire et
              à visiter notre site.
            </p>
          </article>
        </section>
        <Footer />
      </section>
    </>
  );
};

export default About;
