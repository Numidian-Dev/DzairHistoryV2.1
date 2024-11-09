"use client";
import { useState, useEffect } from "react";
import TitleSection from "../titleSection/TitleSection";
import axios from "axios";
import url_api from "../config/URL";
import Link from "next/link";
import BookComponent from "../BookComponent/BookComponent";
const Books = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);

      const response = await axios.get(`${url_api}/api/books`, {
        method: "GET",
        headers: {
          Accept: "Application/json",
        },
      });

      setPosts(response.data);
      setLoading(false);
    };
    loadPost();
  }, []);

  return (
    <section id="books">
      <div className="container-title-books">
        <TitleSection title={"Livres"} backgroundColor={"#151414"} />
        <div className="see-more">
          <Link href="/archives/livres">Voir plus</Link>
        </div>
      </div>
      <div className="container-books">
        {/*  {loading? "":posts.slice(0,6).map((book, index) => (
                    <Link href={`archives/livres/details/${book.id}`} className="books-card" key={index}>
                        <div className="book">
                            
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                            </div>
                            <div className="book-title">
                            {book.volumeInfo.title}
                            </div>
                    </Link>
                ))} */}
        {loading
          ? ""
          : posts.slice(0, 6).map((book, index) => {
            const title = book.volumeInfo.title.replace("...","").replace("[]","")
              return (
                <Link
                  href={`archives/livres/details/${book.id}`}
                  className="books-card"
                  key={index}
                >
                  <BookComponent title={title} />
                </Link>
              );
            })}
      </div>
    </section>
  );
};

export default Books;
