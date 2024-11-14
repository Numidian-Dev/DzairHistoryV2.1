import Article from "@/app/components/Article/article"
import url_api from "@/app/components/config/URL";
import axios from "axios"
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";


export async function generateMetadata({ params, searchParams }, parent) {
    const id = params.article;
  
    const res= await axios.get(`${url_api}/api/articles/${params.article}`)
    const post = await res.data 
    console.log(post && post.desc);
    const desc = post.desc;
    const metaImg = `https://dzairhistory.com${post.meta}`;
    return {
      title: post.title,
      description: desc,
      openGraph: {
        images: [metaImg],
      },
    };
  }

const Page = async ({params})=>{
  
    const res= await axios.get(`${url_api}/api/articles/${params.article}`)
    const data = await res.data 
    
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