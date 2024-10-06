'use client'
import { useState, useEffect } from 'react'
import TitleSection from "../titleSection/TitleSection";
import axios from 'axios';
import url_api from '../config/URL';
import Link from 'next/link';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPost = async () => {
          setLoading(true);
    
          const response = await axios.get(`${url_api}/api/books`, {
            method: "GET",
            headers: {
              Accept: "Application/json",
            },
          });
    
          setBooks(response.data);
          setLoading(false);
        };
        loadPost();
      }, []);

    
    return (
        <section id="books">
            <div className="container-title-books">

            <TitleSection title={"Livres"} backgroundColor={"#151414"} />
            <div className="see-more">
              <Link href="/archives/livres">
              Voir plus
              </Link>
             </div>
            </div>
            <div className="container-books">
                {loading && <p>Chargement en cours...</p>}
                {error && <p>Erreur lors du chargement des livres : {error.message}</p>}
                {!loading && !error && books.length === 0 && <p>Aucun livre trouvé.</p>}
                {books.slice(0,6).map((book, index) => (
                    <div className="books-card" key={index}>
                        <div className="book">
                            
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                            </div>
                            <div className="book-title">
                            {book.volumeInfo.title}
                            </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Books;
