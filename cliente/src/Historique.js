import React from "react";
import { useState,useEffect } from "react";
import { Redirects } from "./Redirects";
import { FormatDate } from "./FormatDate";
export function Historique(){

const [encherisseur, setEncherisseur] = useState([]);
const [vendeur, setVendeur] = useState([]);
const token = localStorage.getItem('token');

useEffect(() => {
  if(token) {
    const headers = new Headers();
    headers.append('token', token);

    fetch(`https://enchere-spring-production.up.railway.app/api/historique/HistoriqueEncherisseur`, {
      method: 'GET',
      headers: headers
    })
    .then(response => response.json())
    .then(data => setEncherisseur(data))
    
     //vendeur
     fetch(`https://enchere-spring-production.up.railway.app/api/historique/HistoriqueVente`, {
        method: 'GET',
        headers: headers
    })
    .then(responseVendeur => responseVendeur.json())
    .then(dataVendeur => setVendeur(dataVendeur))


  } else {
    console.log('Token not found');
  }
}, [token]);

       return (
            <div className="Listuser">
                 <Redirects></Redirects>
                    <div className="row" style={{marginTop:'50px'}}>
                      <div className="d-flex justify-content-center">
                       <CardDetail titre={"historique de vente"}>
                                 {vendeur.map((enchere) => (
                                         <CardDetailVente titre1={enchere[0]} pricemin1={enchere[1]} duree1={enchere[2]} date1={FormatDate(enchere[3])} produits1={enchere[4]} descriptions={enchere[5]} categorie1={enchere[6]} prixwin1={enchere[7]} user1={enchere[9]} ></CardDetailVente>      
                                    ))}
                      </CardDetail>
                      <CardDetail titre={"historique de enchere"}>
                          {encherisseur.map((enchere) => (
                               <CardEncherisseur titre={enchere[0]} prixmin={enchere[1]} duree={enchere[2]} date={FormatDate(enchere[3])} montant={enchere[4]} datemise={FormatDate(enchere[5])} produit={enchere[6]} descriptions={enchere[7]} category={enchere[8]}></CardEncherisseur>
                          ))}                  
                      </CardDetail>
                    </div>
                    </div>
            </div>
         /*<div className="Listuser">
                <Redirects></Redirects>
                 <div className="row" style={{marginTop:'50px'}}>
                         
                       <div className="col-md-6">
                         <div className="d-flex justify-content-center">
                           <div className="container py-5 shadow-lg border-1">
                                <div className="row">
                                    {vendeur.map((enchere) => (
                                         <CardDetailVente titre1={enchere[0]} pricemin1={enchere[1]} duree1={enchere[2]} date1={enchere[3]} produits1={enchere[4]} categorie1={enchere[5]} prixwin1={enchere[6]} user1={enchere[7]} ></CardDetailVente>      
                                    ))}
                                </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-6">
                        
                       </div>
                 </div>
         </div>*/
         /* <div className="Listuser">
          <Redirects></Redirects>

          <h1>Historique de vos enchères</h1>


   <div className="historique-encherisseur">
   <p>Historique Encherisseur</p>
          {encherisseur.map((enchere) => (
           <li key={enchere[0]}>
           <div className="card">
             <h2>{enchere[0]}</h2>
             <p>Prix minimum de vente: {enchere[1]}</p>
             <p>Durée de l'enchère: {enchere[2]} minutes</p>
             <p>Date et heure de l'enchère: {enchere[3]}</p>
             <p>Montant offre : {enchere[4]}</p>
             <p>Date heure du mise: {enchere[5]}</p>
             <p>produit : {enchere[6]}</p>
             <p>Description du produit : {enchere[7]}</p>
             <p>Catégorie produit: {enchere[8]}</p>
           </div>
         </li> 
    ))}
   </div>  

       
  <div className="historique-vente">
  <p>Historique vente</p>
         {vendeur.map((enchere) => (
           <li key={vendeur[0]}>
           <div className="card">
             <h2>{vendeur[0]}</h2>
             <p>Prix minimum de vente: {vendeur[1]}</p>
             <p>Durée de l'enchère: {vendeur[2]} minutes</p>
             <p>Date et heure de l'enchère: {vendeur[3]}</p>
             <p>produit : {vendeur[4]}</p>
             <p>Description du produit : {vendeur[5]}</p>
             <p>Catégorie produit: {vendeur[6]}</p>
             <p>Prix gagnant : {vendeur[7]}</p>
             <p>Utilisateur : {vendeur[9]}  {vendeur[10]}</p>
           </div>
         </li> 
    ))}
  </div>
        
 </div>*/

  );
} 

export function CardDetail({children,titre}){
  return(
    <div className="col-md-6">
      <div className="d-flex justify-content-center">
      <div className="container py-5 shadow-lg border-1">
            <h2>{titre}</h2>
           <div className="row">
                {children}
           </div>
        </div>
       </div>
    </div> 
  );
}


export function CardDetailVente({titre1,pricemin1,duree1,date1,produits1,descriptions,categorie1,prixwin1,user1}){
    return(
      <div class="col-lg-6 col-md-12 mb-8 mb-lg-0">
        <div className="card shadow-sm">
           <Titre>titre :{titre1}</Titre>
           <Column>Prix minimum Vente : {pricemin1} ar</Column>
           <Column>Durée de l'enchère: {duree1} min</Column>
           <Column>Date et heure de l'enchère : {date1}</Column>
           <Produits>produits : {produits1}</Produits>
           <Descriptions>description:{descriptions}</Descriptions>
           <Column>Catégorie produit: {categorie1}</Column>
           <Column>Prix gagnant  : {prixwin1}</Column>
           <Column>Utilisateur : {user1}</Column>
           <Nbetoile/>
        </div>
      </div>
    );
} 

export function CardEncherisseur({titre,prixmin,duree,date,montant,datemise,produit,descriptions,category}){
    return(
      <div class="col-lg-6 col-md-12 mb-8 mb-lg-0">
        <div className="card shadow-sm" style={{marginTop:'20px'}}>
             <Titre>{titre}</Titre>
             <Column>Prix minimum de vente: {prixmin} ar</Column>
             <Column>Durée de l'enchère: {duree} minutes</Column>
             <Column>Date et heure de l'enchère: {date}</Column>
             <Column>Montant offre : {montant} ar</Column>
             <Column>Date heure du mise: {datemise}</Column>
             <Column>produit : {produit}</Column>
             <Column>Description du produit : {descriptions}</Column>
             <Column>Catégorie produit: {category}</Column>
             <Nbetoile/>
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
      <p className="sm text-muted font-bold">{children}</p>
  );
}

export function Descriptions({children}){
  return(
      <p className="sm text-muted font-bold">{children}</p>
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




