"use client";
import { useEffect, useState } from "react";
//import { useRouter } from 'next/router';
import axios from "axios";
import { ImBubble2 } from "react-icons/im";
import { useRouter } from "next/navigation";
import url_api from "../config/URL";
import Pagination from "../Categorie/Pagination/Pagination";
const Books = () => {
  const [posts, setPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState();
  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${url_api}/api/books/page/${currentPage}`,
          {
            headers: { Accept: "application/json" },
          }
        );
        setPosts([...Object.values(res.data.data)]);
        setTotalPages(res.data.totalPages);
      } catch (error) {
        console.error("Erreur lors du chargement des articles:", error);
      }
      setLoading(false);
    };
    loadPost();
  }, [currentPage]);

  return (
    <div className="container-booksPage">
      {/* <div className="btn-filter">Filtre</div> */}
      <div className="carful">
        <h4 className="conseils">
          <ImBubble2 className="bubble" /> Conseils
        </h4>
        <p>
          Pour une lecture optimale et une compréhension approfondie de ces
          livres, nous vous conseillons de vérifier l'identité de l'auteur ainsi
          que le contexte d'écriture et de l'époque dans lequel l'ouvrage a été
          écrit et de croisé les sources, afin de former une opinion informée.
        </p>
      </div>
      <div className="books">
        {posts &&
          posts.map((book) => {
            return (
              <div key={book.id} className="book">
                <div className="img">
                 <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                </div>
                <div className="info-book">
                    <div className="title-book">
                    <h3>{book.volumeInfo.title}</h3>
                  </div>
                  <h4 className="author">{book.volumeInfo.authors}</h4>
                  <button className="read">
                    <a href={`livres/details/${book.id}`}>Lire</a>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div className="bookPage-pagination">
      <Pagination
        totalPage={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        loading={loading}
      />
      </div>
      
    </div>
  );
};

export default Books;
