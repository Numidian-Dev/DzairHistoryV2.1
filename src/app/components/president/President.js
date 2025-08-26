"use client"
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import url_api from '../config/URL'
import TitleSection from '../titleSection/TitleSection'

export default function President() {
    const [data, setData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
const load = async ()=>{
    setLoading(true)
const res = await axios.get(`${url_api}/api/presidents`)
setData(res.data)
setLoading(false)
}
load()
    },[])
    console.log(data)
  return (
    <div className='container-section-presidents'>
       {/*  <div className='container-title-president'>
        <h1>LES PRÉSIDENTS DE L'ALGÉRIE</h1>
        <h2>Histoire • Héritage • Souveraineté</h2>
    </div> */}
    <TitleSection wrap={"normal"} title={"LES PRÉSIDENTS DE L'ALGÉRIE"} backgroundColor={"#181818"} /> 
     <div className="container-president">
    
    {/* <div className="cards-president">
      <div className="card-p">
        <div className="img-p">
        <img src="/president/benBella.jpg" alt=""/>

        </div>
        <div className="info-section">
          <h2 className="president-name">Ahmed Ben Bella</h2>
        <p className="president-title">Premier Président de la République</p>
        <div className="container-date">
          <div className="date">
            <h3>Naissance</h3>
            <p className="birthday">25 décembre 1916</p>
            <p className="city">Maghnia</p>
          </div>
          <div className="date">
            <h3>Décès</h3>
            <p className="birthday">11 avril 2012</p>
            <p className="city">Alger</p>
          </div>
        </div>
        <div className="date-of-activity">
          <h3>Période présidentielle</h3>
          <p>15 septembre 1963 — 19 juin 1965</p>
        </div>
        </div>
        
      </div>
    </div> */}

    {data.map(post=>{
        return(
            <div key={post.id} className="cards-president">
      <div className="card-p">
        <div className="img-p">
        <img src={post.img} alt={post.name}/>

        </div>
        <div className="info-section">
          <h2 className="president-name">{post.name}</h2>
        <p className="president-title">{post.title}</p>
        <div className="container-date">
          <div className="date">
            <h3>Naissance</h3>
            <p className="birthday">{post.birthday}</p>
            <p className="city">{post.placeOfBirthday}</p>
          </div>
          <div className="date">
            <h3> {post.statut === "Vivant" || "Président en exercice" ? "Statut" :"Décès"}</h3>
            <p className="birthday">{post.statut}</p>
            <p className="city">{post.placeOfDaed}</p>
          </div>
        </div>
        <div className="date-of-activity">
          <h3>Période présidentielle</h3>
          <p>{post.presidence}</p>
        </div>
        </div>
        
      </div>
    </div> 
        )
    })}
   
  </div>
    </div>
   
  )
}
