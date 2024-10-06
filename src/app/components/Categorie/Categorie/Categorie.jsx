"use client";
import { useState, useEffect } from "react";
import axios from "axios";

import Sidebar from "../SideBar/SideBar";
import Pagination from "../Pagination/Pagination";
import Link from "next/link";
import url_api from "../../config/URL";
import TitleSection from "../../titleSection/TitleSection";

const Categorie = ({ params }) => {
  const [posts, setPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState();
  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${url_api}/api/article/${params.categorie}/page/${currentPage}`,
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
  }, [params.categorie, currentPage]);

  return (
    <section className="main-categorie">
      <div className="container-categorie">
        {loading
          ? ""
          : posts &&
            posts.length > 0 &&
            posts &&
            posts.map((post) => (
              <Link key={post.id} href={`/article/${post.link}`} className="post-card">
                <div className="post-img">
                  <img src={post.meta} alt={post.title} />
                </div>
                <div className="container-post-description">
                  <h2>{post.title}</h2>
                  <p>{post.resumer}</p>
                </div>
              </Link>
            ))}
        {totalPages <= 1 ? (
          ""
        ) : (
          <Pagination
            totalPage={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            loading={loading}
          />
        )}
      </div>
      {posts && posts.length > 0 && <Sidebar />}
    </section>
  );
};
export default Categorie;
