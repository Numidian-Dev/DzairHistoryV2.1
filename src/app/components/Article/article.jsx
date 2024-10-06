"use client";
import React, { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
} from "react-share";

import ReactGA from "react-ga4";

const Article = ({ data }) => {
  return (
    <section>
      <h3 className="subtitle">{data.categorie}</h3>
      {<h1 className="title-article">{data.title}</h1>}
      <hr className="title-hr" />
      <article>
        {data.img != undefined ? (
            <>
             <div className="share-icon">
             <FacebookShareButton
               title={data.Title}
               url={`https://dzairhistory.com/articles/${data.link}`}
               hashtag={"#AlgerianHeritage"}
               className="fb"
             >
               <FacebookIcon size={32} round />
             </FacebookShareButton>
             <TwitterShareButton
               title={data.title}
               url={`https://dzairhistory.com/articles/${data.link}`}
               hashtag={"#AlgerianHeritage"}
             >
               <TwitterIcon size={32} round />
             </TwitterShareButton>
           </div>
            <div className="img-article">
            {<img src={`${data.img}`} alt={data.alt} />}
          </div>
          </> 
        ):null}
     
           
            
        <ReactMarkdown /* children={data.body} */ rehypePlugins={[rehypeRaw]} >
            {data.body.children}
        </ReactMarkdown>
      </article>
    </section>
  );
};

export default Article;
