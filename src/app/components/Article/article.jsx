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
        
     
           
            
        <ReactMarkdown /* children={data.body} */ rehypePlugins={[rehypeRaw]} >
            {data.body}
        </ReactMarkdown>
      </article>
    </section>
  );
};

export default Article;
