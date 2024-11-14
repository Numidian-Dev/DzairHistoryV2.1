"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TitleSection from "../titleSection/TitleSection";
import url_api from "../config/URL";
import Link from "next/link";
const OtherArticles = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);

      const response = await axios.get(`${url_api}/api/articles`, {
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
const skelton = [1,2,3,4]
const formtedTitle = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "-")
    .replace(/:/g, "-")
    .replace(/'/g, "-")
    .replace(/---/g, "-")
    .toLowerCase();
};
  return (
    <section className="otherArticle">
      <div className="other-article-title">
        <TitleSection title={"Autres articles"} backgroundColor={"#151414"} />
      </div>
      <div className="container-others">
        {loading ? (
          <div className="skelton-other-article-container">
         {/*    <div className="card-other-skelton">
              <div className="other-skelton">
                <div className="other-img" />
              </div>
              <div className="container-info-other-skelton">
                <div className="label-skelton" />
                <div className="date-skelton" />
                <div className="date-skelton" />
              </div>
            </div>
            <div className="card-other-skelton">
              <div className="other-skelton">
                <div className="other-img" />
              </div>
              <div className="container-info-other-skelton">
                <div className="label-skelton" />
                <div className="date-skelton" />
                <div className="date-skelton" />
              </div>
            </div>
            <div className="card-other-skelton">
              <div className="other-skelton">
                <div className="other-img" />
              </div>
              <div className="container-info-other-skelton">
                <div className="label-skelton" />
                <div className="date-skelton" />
                <div className="date-skelton" />
              </div>
            </div>
            <div className="card-other-skelton">
              <div className="other-skelton">
                <div className="other-img" />
              </div>
              <div className="container-info-other-skelton">
                <div className="label-skelton" />
                <div className="date-skelton" />
                <div className="date-skelton" />
              </div>
            </div> */}
            <div className="card-other-skelton">
              <div className="other-skelton">
                <div className="other-img" />
              </div>
              <div className="container-info-other-skelton">
                <div className="label-skelton" />
                <div className="date-skelton" />
                <div className="date-skelton" />
              </div>
            </div>
          </div>
        ) : (
          posts &&
          posts
            .sort(() => 0.5 - Math.random())
            .slice(0, 4)
            .map((post) => (
              <Link key={post.id} href={ post.link ?`/article/${post.link}`: formtedTitle(`/article/${post.title}`) } className="card-other">
                <div className="other">
                  <div className="other-img">
                    <img src={post.img} alt="img" />
                  </div>
                </div>
                <div className="container-info-other">
                  <div className="label">
                    <h5>{post.categorie}</h5>
                  </div>
                  <h3>{post.title}</h3>
                  <div className="date">
                    <h5>{post.date}</h5>
                  </div>
                </div>
              </Link>
            ))
        )}
      </div>
    </section>
  );
};
export default OtherArticles;
