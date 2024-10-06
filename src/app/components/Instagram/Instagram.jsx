"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import TitleSection from "../titleSection/TitleSection";
import url_api from "../config/URL";
import logo from "@/app/styles/assets/img/logo/dzair.svg";
const Instagram = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState();
  const [postState, setpostState] = useState(false);

  const current = loading
    ? ""
    : posts.data.filter((filtre) => filtre.id === currentPost);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const res = await axios.get(`${url_api}/api/instagram-posts`);
      setPosts(res.data);
      setLoading(false);
    };
    loadPost();
  }, []);

  let nombreOfPosts = 8;
  return (
    <section className="instagram">
      <div className="insta-title">
        <TitleSection title={"Instagram"} backgroundColor={"#151414"} />
      </div>
      <div className="container-follow-us">
        <div className="img-profile">
          <img src={logo.src} alt="logo" />
        </div>
        <div className="follow-us">
          <Link href="https://www.instagram.com/dzairhistory_/">Suivre</Link>
        </div>
      </div>
      <div className="container-instagram">
        {loading
          ? ""
          : posts.data.slice(0, nombreOfPosts).map((post) => {
              return (
                <div
                  onClick={() => {
                    setpostState(!postState);
                    setCurrentPost(post.id);
                  }}
                  key={post.id}
                  className="insta"
                >
                  <div className="insta-content">
                    <img src={post.media_url} alt={post.caption} />
                  </div>
                </div>
              );
            })}
        <div className="insta">
          <div className="insta-content">
            <Link href={"https://www.instagram.com/dzairhistory_/"}>
              <div className="see-more-insta">Voir plus...</div>
            </Link>
          </div>
        </div>
      </div>
      <div
        style={postState === true ? { display: "flex" } : { display: "none" }}
        className="post-content"
      >
        <div className="post-container">
          {currentPost != undefined ? (
            <img
              src={current && current[0].media_url}
              alt={current[0].caption}
            />
          ) : (
            ""
          )}
          <div className="overlay">
            <p>
              {currentPost != undefined ? current && current[0].caption : ""}
            </p>
          </div>
        </div>
        <div onClick={() => setpostState(!setPosts)} className="background" />
      </div>
    </section>
  );
};
export default Instagram;
