"use client"
import { useState, useEffect } from "react";
import Script from "next/script";
import axios from "axios";
import Head from "next/head";
import url_api from "../components/config/URL";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
/* import Sidebar from "../components/SideBar";
import CardPost from "../components/CardPost"; */



const Search = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusSearch, setStatusSearch] = useState("");
  const { search } = typeof window !== "undefined" && window.location;
  const query = new URLSearchParams(search).get("s");

  useEffect(() => {
    const load = async () => {
      const articles = await axios.get(
        `http://localhost:5050/api/articles/search/${query}`
      );
      const books = await axios.get(
        `http://localhost:5050/api/books/search/${query}`
      );
      /* const maps = await axios.get(
        `http://localhost:5050/maps/search/${query}`
      ); */

      const [result1, result2, /* result3 */] = await Promise.all([
        articles.data,
        books.data,
       /*  maps.data, */
      ]);
      const allResult = [...result1, ...result2, /* ...result3 */].filter(
        (filtre) => typeof filtre === "object"
      );
      setPosts(allResult);
    };
    load();
  }, [query]);

  useEffect(() => {
    if (query && posts.length === 0) {
      setStatusSearch(
        <p className="title-search">
          Rien n'a été trouver pour la recherche <span> « {query} » </span>
          essayer avec un titre plus précis, un mot-clé ou un auteur.
        </p>
      );
    } else {
      setStatusSearch(
        <p className="title-search">
          Résultat pour la recherche <span> « {query} » : </span>
        </p>
      );
    }
  }, [posts]);
  console.log(posts);
  
  const formtedTitle = (str)=>{
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "-")
    .replace(/:/g, "-")
    .replace(/'/g, "-")
    .replace(/---/g, "-")
    .toLowerCase()
}

  return (
    <>
      <Header />
      <div className="container">
        <section className="search-">
          <div className="search-page">
            <h1>Recherche</h1>
            <p>
              Rechercher un article, un livre, une carte, ou une oeuvre d'art.
            </p>
            <form action="/search" method="get">
              <h2 className="label">Entrer votre recherche</h2>
              <input type="search" name="s" placeholder="Rechercher" />
              <button type="submit">Rechercher</button>
            </form>

            <div className="container-result">
              {query ? (
                <>
                  {statusSearch}
                  {posts.map((post) => (
                    <div
                      key={post.title ? post.title : post.volumeInfo.title}
                      className="container-search"
                    >
                      <div className="card">
                        <div className="card-img">
                          <img
                            src={
                              post.img
                                ? post.img
                                : post.volumeInfo.imageLinks.thumbnail
                            }
                            alt=""
                          />
                        </div>
                        <div className="title">
                          <h3>
                            {post.title ? post.title : post.volumeInfo.title}
                          </h3>
                          <a
                            href={
                              post.body
                                ? (  post.link ?`/article/${post.link}`: formtedTitle(`/article/${post.title}`) )
                                : `archives/livres/details/${post.id}`
                            }
                          >
                            <button className="btn-res">Lire</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
         {/*  <Sidebar /> */}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Search;