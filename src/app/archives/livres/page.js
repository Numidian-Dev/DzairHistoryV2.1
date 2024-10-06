
import React from "react";
import Head from "next/head";
import Script from "next/script";
import Books from "@/app/components/BooksPage/BooksPage";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import url_api from "@/app/components/config/URL";
export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.article;

  const metaImg = `https://dzairhistory.com/img/meta/acceuil_meta_og.png`;
  return {
    title: "Livres",
    description: "Dzair History a pour objectif de partager l'histoire et la culture Algérienne avec les Algériens avant tout, pour qu'ils puissent se réapproprier leurs histoires, mais aussi pour tous ceux qui voudraient découvrir l'histoire et la culture Algérienne.",
     openGraph: {
      images: [metaImg],
    }, 
  };
}
const Livres = () => {
  return (
    <div>
      
      <Header />
      <div className="title-categorie">
        <h1>Livres</h1>
      </div>
      <section className="container-categorie-books">
        <Books />
      {/*   <Sidebar /> */}
      </section>
      <Footer />
    </div>
  );
};

export default Livres;