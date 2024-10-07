"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import url_api from "../config/URL";
import Link from "next/link";


const Spotlight = () => {
    const [active, setActive] = useState(0);
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [progress, setProgress] = useState(0);
    const [skeltonTab, setSelketonTab] = useState();
    const [activeImage, setActiveImage] = useState();

    const toggleTab = (index) => {
        setActive(index);
    };

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
      
    useEffect(() => {
        setProgress(0);
    }, [active]);

    useEffect(() => {
        if (progress < 100) {
            const timer = setTimeout(() => {
                setProgress(progress + 10);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [progress]);

    useEffect(() => {
        if (progress === 100) {
            setActive((prevActive) => {
                const nextActive = prevActive + 1;
                return nextActive > 2 ? 0 : nextActive;
            });
        }
    }, [progress]);

    const style = {
        borderTop: (index) => active === index 
        ? {borderTopLeftRadius: 0, borderTopRightRadius: 0} 
        : {borderRadius: 10},
        animate: (index) => active === index ? { width: "100%" } : { width: "0%" },
        animateStyle : (index) => active === index 
        ? {background: "red", borderRadius: 0} 
        : {background: "rgba(0, 0, 0, 0.300)", borderRadius: 10}
    };

    useEffect(() => {
        setSelketonTab(
            <div className="container-seklton-tab">
                <div className="seklton-content"><div className="seklton-tab"/></div>
                <div className="seklton-content"><div className="seklton-tab"/></div>
                <div className="seklton-content"><div className="seklton-tab"/></div>
            </div>
        );
    }, []);

    useEffect(() => {
        if (posts.length > 0) {
            setActiveImage(
                <div className="img">
                    <img src={posts[active]?.meta} alt={posts[active]?.title} />
                </div>
            );
        }
    }, [posts, active]);

    return (
        <section className="spotlight">
            <div className="container-spotlight">
                {loading ? (
                    <div className="skelton-spotlight" />
                ) : (
                    <Link href={`/article/${posts[active]?.link}`} className="active-content">
                        {activeImage}
                        <div className="overlay">
                            <h1>{posts[active]?.title}</h1>
                        </div>
                    </Link>
                )}
                <div className="container-tab">
                    {loading ? (
                        skeltonTab
                    ) : (
                        posts.sort((a, b) => b.id - a.id).slice(0, 3).map((post, index) => (
                            <div key={post.id} onClick={() => toggleTab(index)} className={`tab-content ${active === index ? 'active-tab' : ''}`}>
                                <Link href={`/article/${post.link}`} className="content">
                                    <div style={style.borderTop(index)} className="img">
                                        <img style={style.borderTop(index)} src={post.meta} alt={post.title} />
                                        <motion.div className="progress"
                                            initial={{ width: "0%" }}
                                            animate={style.animate(index)}
                                            transition={{ duration: active === index ? 10 : 0 }}
                                            style={style.animateStyle(index)} />
                                    </div>
                                    <div style={style.borderTop(index)} className="overlay">
                                        <h2>{post.title}</h2>
                                    </div>
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Spotlight;
