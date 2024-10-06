
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactPage from "../components/contact/Contact";
import url_api from "../components/config/URL";
export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.article;

  const metaImg = `https://dzairhistory.com/img/meta/acceuil_meta_og.png`;
  return {
    title: "Contact",
    description: "Dzair History a pour objectif de partager l'histoire et la culture Algérienne avec les Algériens avant tout, pour qu'ils puissent se réapproprier leurs histoires, mais aussi pour tous ceux qui voudraient découvrir l'histoire et la culture Algérienne.",
     openGraph: {
      images: [metaImg],
    }, 
  };
}
const Contact = ()=>{
  return(
    <>
    <Header/>
    <ContactPage/>
    <Footer/>
    </>
  )
}

export default Contact;