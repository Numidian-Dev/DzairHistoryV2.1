import Header from "@/app/components/Header/Header";
import url_api from "@/app/components/config/URL";
import TitleSection from "@/app/components/titleSection/TitleSection";
import axios from "axios";
import Link from "next/link";
import { post } from "../../../../backend/app";
import Footer from "@/app/components/Footer/Footer";
import Sidebar from "@/app/components/Categorie/SideBar/SideBar";
import Pagination from "@/app/components/Categorie/Pagination/Pagination";
import Categorie from "@/app/components/Categorie/Categorie/Categorie";
const capitalize = (str) => {
  if (typeof str !== "string") {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.article;

  const res = await axios.get(`${url_api}/api/categorie/${params.categorie}`);
  const post = await res.data;
 
    const desc = "Découvrez l'histoire et la culture de l'Algérie sur notre site. Explorez les grandes étapes de l'histoire de ce pays fascinant, depuis les premiers habitants jusqu'à aujourd'hui. Découvrez également les différentes cultures et civilisations qui ont influencé l'Algérie au fil des siècles. Faites un voyage dans le temps et en apprenez davantage sur l'histoire de l'Algérie."; 
  const metaImg = `https://dzairhistory.com/img/meta/acceuil_meta_og.png`;
  return {
    title: capitalize(params.categorie),
     description: desc,
      openGraph: {
        images: [metaImg],
      }, 
  };
}


const Page = async ({ params }) => {
  const res = await axios.get(`${url_api}/api/categorie/${params.categorie}`, {
    method: "GET",
    headers: {
      Accept: "Application/json",
    },
  });
  const data = await res.data;
  const posts = [...Object.values(data.articles)];

  return (
    <section>
      <Header />
      <div className="title-categorie">
        <h1>{capitalize(params.categorie)}</h1>
      </div>
      <div className="lst-title">
        <TitleSection title={"Dernier articles"} />
      </div>
      <div className="container-cards-16-9">
        {posts
          .sort((a, b) => b.id - a.id).slice(0, 4).map((post) => (
            <Link key={post.id} href={`/article/${post.link}`} className="content-card-16-9">
              <div className="img-card-16-9">
                <img src={post.meta} alt={post.title} />
              </div>
              <div className="description-card-16-9">
              <h2>{post.title}</h2>
              </div>
            </Link>
          ))}
      </div>
      <div className="category-article-ads-title">
        <div className="article-title">
          <TitleSection title={posts.length <= 4 ? "" : "Articles précédents"}/>
        </div>
        <div className="ads-title">
          <TitleSection title={posts.length <= 4 ? "" : "Ads"}/>
        </div>
      </div>
      <Categorie params={params} />
      <Footer />
    </section>
  );
};
export default Page;
