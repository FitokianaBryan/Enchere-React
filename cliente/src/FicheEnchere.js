import React from "react";
import { useState,useEffect } from "react";
import { Redirects } from "./Redirects";
import { useParams } from "react-router-dom";
import { Card, Typography, Avatar } from 'antd';
import { FormatDate } from "./FormatDate";
export function FicheEnchere(){
    let { id } = useParams();
    const [data, setData] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const [redirect2, setRedirect2] = useState(false);
    const [idEnchere, setIdEnchere] = useState(null);    
  
    useEffect(() => {
      fetch("https://enchere-spring-production.up.railway.app/api/enchere/ficheEnchere/"+id)
        .then((response) => response.json())

        .then((data) => setData(data));
    }, [id]);
    
    function Encherir(id) {
      setIdEnchere(id);
      setRedirect2(true);
    }

    function Resultat(id)
    {
      setIdEnchere(id);
      setRedirect(true);
    }


    if(redirect2) { 
      const token = localStorage.getItem('token');
      if (!token) {
        alert("Vous devez être connecté pour accéder à cette page");
        window.location.href = '/listEnchere';
      } else {
        window.location.href = `/Encherir/${idEnchere}`;
      }
      return null;
    }


    if(redirect)
    {
      const token = localStorage.getItem('token');
      if (!token) {
        alert("Vous devez être connecté pour accéder à cette page");
        window.location.href = '/listEnchere';
      } else {
        window.location.href = `/Resultat/${idEnchere}`;
      }
      return null;
    }

        return (
          /*<div className="Listuser">
            <Redirects></Redirects>
            <h1>Fiche de l'enchère : {id}</h1>
            {data.map((item) => (
       <Card key={item[0]} style={{ width: 300, margin: '16px auto' }} cover={<img alt={item[10]} src={item[10]} />}>
    <Card.Meta
      avatar={<Avatar src={item[10]} />}
      title={<Typography.Title level={4}>{item[4]}</Typography.Title>}
      description={
        <div>
          <p>vendeur: {item[2]} {item[3]}</p>
          <p>Prix minimum Vente: {item[5]}</p>
          <p>Durree : {item[6]} mn</p>
          <p>date heure enchère: {item[7]}</p>
          <p>date heure fin: {item[8]}</p>
          <p>produit : {item[9]}</p>
          <p>catégorie : {item[11]}</p>
          <p>Status: {item[12] === 1 ? "Terminé" : "En cours"}</p>
          
          {item[12] !== 1 && (
        <button onClick={() => Encherir(item[0])}>
          ReEncherir
        </button>
         )}

        {item[12] !== 1 && (
        <button onClick={() => Resultat(item[0])}>
          Voir le resultat
        </button>
         )}

        </div>
      }
    />
</Card>
    ))}      
          </div>*/
          <div className="Listuser"> 
          <Redirects></Redirects>
           <div className="d-flex justify-content-center">
            <div className="col-sm-6">
            {data.map((item) => (
               <CardFiche titre={item[4]} vendeur={item[2]} pricemin={item[5]} 
               duree={item[6]}  datedebut={FormatDate(item[7])} datefin={FormatDate(item[8])}
               produits={item[9]} categorie={item[11]}   
               statut={item[12] === 1 ? "Terminé" : "En cours"}  image={item[10]} 
               click1={item[12] !== 1 && (<Button click={() => Encherir(item[0])}>encherir</Button>)}
               click2={item[12] !== 0 && (<Button click={() => Resultat(item[0])}>voir resultat</Button>)} 
               ></CardFiche>
              ))}
             </div>
           </div>
         </div>
        );
} 

export function CardFiche({titre,vendeur,pricemin,duree,datedebut,datefin,categorie,statut,produits,image,click1,click2}){
  return(
      <div className="container py-3">
      <div className="card   rounded shadow-lg border-0">
          <br/>
           <h4>Fiche enchere</h4>
           <br/>
           <Titre>titre :{titre}</Titre>
            <Image image={image}></Image>
           <Column>vendeur : {vendeur}</Column>
           <Column>Prix minimum Vente : {pricemin}</Column>
           <Column>duree : {duree} mn</Column>
           <Column>date debut : {datedebut}</Column>
           <Column>date fin : {datefin}</Column>
           <Produits>produits : {produits}</Produits>
           <Column>categorie : {categorie}</Column>
           <Column>statut  : {statut}</Column>
          
           <Nbetoile/>
           {click1}
           {click2}
        </div>
       </div>
  );
}
export function Titre({children}){
  return(
      <h5> <a href="#" className="text-dark">{children}</a></h5>
  );
}


export function Column({children}){
  return(
      <p className="large text-muted font-Arial">{children}</p>
  );
}

export function Descriptions({children}){
  return(
      <p className="large text-muted font-Arial">{children}</p>
  );
}

export function Image({image}){
  return(
      <div className="card-body p-4"><img src={image} alt="" className="img-fluid d-block mx-auto mb-3"/>
      </div>
  );
}

export function Produits({children}){
  return(
       <Column>{children}</Column>
  );
}

export function Nbetoile(){
  return(
      <ul className="list-inline small">
        <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
        <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
        <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
        <li className="list-inline-item m-0"><i className="fa fa-star-o text-success"></i></li>
        <li className="list-inline-item m-0"><i className="fa fa-star-o text-success"></i></li>
      </ul>
  )
}
export function Button({children,click}){
  return(
      <div className="d-flex justify-content-center">
        <div className="col-sm-4 text-center" style={{marginTop:'20px'}}>
          <button type="submit"  className="btn btn-primary" onClick={click}>{children}</button>
        </div>
      </div>
  )
}