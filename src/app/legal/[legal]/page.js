import Article from "@/app/components/Article/article"
import url_api from "@/app/components/config/URL";
import axios from "axios"
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";


export async function generateMetadata({ params, searchParams }, parent) {
    const id = params.article;
  
    const res = await axios.get(`${url_api}/api/legals/${params.legal}`);
    const post = await res.data;
   
      const desc = "Découvrez l'histoire et la culture de l'Algérie sur notre site. Explorez les grandes étapes de l'histoire de ce pays fascinant, depuis les premiers habitants jusqu'à aujourd'hui. Découvrez également les différentes cultures et civilisations qui ont influencé l'Algérie au fil des siècles. Faites un voyage dans le temps et en apprenez davantage sur l'histoire de l'Algérie."; 
    const metaImg = `https://dzairhistory.com/img/meta/acceuil_meta_og.png`;
    return {
      title: post.title,
       description: desc,
        openGraph: {
          images: [metaImg],
        }, 
    };
  }

const Page = async ({params})=>{
    const res= await axios.get(`${url_api}/api/legals/${params.legal}`)
    const data = await res.data[0] 
    return(
      <section>
        <Header/>
        <section className="container-article">
        <Article data={data}/>
        </section>
        <Footer/>
      </section>
    )
}
export default Page