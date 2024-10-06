import Header from "@/app/components/Header/Header"
import Footer from "@/app/components/Footer/Footer"
import BooksDetail from "@/app/components/BooksPage/BooksDetail"
import axios from "axios"
import url_api from "@/app/components/config/URL"
const Detail = async ({params})=>{
    const res = await axios.get(`${url_api}/api/books/${params.detail}`, {
        method: "GET",
        headers: {
          Accept: "Application/json",
        },
      });
      const data = await res.data[0];
    console.log(data)
    return (
        <section>
            <Header/>
              <BooksDetail books={data}/>  
            <Footer/>
        </section>
        
    )
}

export default Detail