"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Details = ({ books }) => {
    const [random, setRandom] = useState("");
    const router = useRouter();
    const query = router.query;
  
    /* const posts = books.items.filter((book) => book.id === query.id); */
    const post = books;
  
   /*  const samesAuthor = books.filter((filtre) => {
      return filtre.volumeInfo.authors &&
        filtre.volumeInfo.authors.length > 0 &&
        post.volumeInfo.authors &&
        post.volumeInfo.authors.length > 0
        ? filtre.volumeInfo.authors.includes(post.volumeInfo.authors[0])
        : false;
    });
  
    const smA = books.filter(
      (filtre) =>
        filtre.volumeInfo.title &&
        filtre.volumeInfo.title.includes(...post.volumeInfo.title)
    );
  
    const fsa = samesAuthor.filter((filtre) => filtre.id != query.id);
    const sm = smA.filter(
      (filtre) => filtre.id != query.id && filtre.id != fsa.map((f) => f.id)
    );
  
    const randomBook = [...sm]
      .sort(() => 0.5 - Math.random())
      .slice(Math.floor(sm.length - 6, 0));
  
    useEffect(() => {
      setRandom(
        sm <= 0 ? (
          <p>aucun livre n'a été trouver</p>
        ) : (
          <div className="fsa">
            {randomBook.map((post) => {
              return (
                <div key={post.id} className="book-fsa">
                  <div className="fsa-img">
                    <img
                      src={post.volumeInfo.imageLinks.thumbnail}
                      alt={post.volumeInfo.title}
                    />
                  </div>
                  <div className="container-descri">
                    <div className="fsa-title">
                      <h5>{post.volumeInfo.title}</h5>
                    </div>
                    <h6>{post.volumeInfo.authors}</h6>
                    <a href={post.id}>
                      <button className="read">Lire</button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )
      );
    }, []); */
    return (
      <div>
        <h1 className="title-detail">{post.volumeInfo.title}</h1>
        <section className="container">
          <div className="container-details">
            <div className="container-details-book">
              <div className="detail-book">
                <div className="img-book">
                  <img src={post.volumeInfo.imageLinks.thumbnail} />
                </div>
                <div>
                  <h4>{post.volumeInfo.title}</h4>
                  <h5> Auteur : {post.volumeInfo.authors}</h5>
                  <h5> Date de publication : {post.volumeInfo.publishedDate}</h5>
                  <div className="container-btn">
                    <a href={post.accessInfo.webReaderLink}>
                      <button className="btn-book">Lire</button>
                    </a>
                    <a href={post.accessInfo.pdf.downloadLink}>
                      <button className="btn-book">Télécharger en PDF</button>
                    </a>
                    <a href={post.accessInfo.epub.downloadLink}>
                      <button className="btn-book">Télécharger en EPUB</button>
                    </a>
                  </div>
                </div>
              </div>
             {/*  <div className="container-fsa">
                <div className="f-book-t">
                  <h3>Livres du même auteur </h3>
                  <div className="hr" />
                </div>
                <div className="fsa">
                  {fsa.length <= 0 ? (
                    <p className="no-book">
                      Aucun livre du même auteur n'a été trouver...
                    </p>
                  ) : (
                    fsa.map((post) => {
                      return (
                        <div key={post.id} className="book-fsa">
                          <div className="fsa-img">
                            <img
                              src={post.volumeInfo.imageLinks.thumbnail}
                              alt={post.volumeInfo.title}
                            />
                          </div>
                          <div className="container-descri">
                            <div className="fsa-title">
                              <h5>{post.volumeInfo.title}</h5>
                            </div>
                            <h6>{post.volumeInfo.authors}</h6>
                            <a href={post.id}>
                              <button className="read">Lire</button>
                            </a>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
              <div className="container-fsa">
                <div className="f-book-t">
                  <h3>Livres qui pourrait vous plaire </h3>
                  <div className="hr" />
                </div>
                {random}
              </div> */}
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Details;

