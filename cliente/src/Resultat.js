import React from "react";
import { useState,useEffect } from "react";
import { Redirects } from "./Redirects";
import { useParams } from "react-router-dom";
import { Card, Typography, Avatar } from 'antd';
import { FormatDate } from "./FormatDate";
export function Resultat(){

    let { id } = useParams();
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch("https://enchere-spring-production.up.railway.app/api/historique/ResultatEnchere/"+id)
        .then((response) => response.json())

        .then((data) => setData(data));
    }, [id]);
        return (
          <div className="Listuser">
            <Redirects></Redirects>
            <h1>Resultat de l'enchère : {id}</h1>
             {data.map((item) => (
                <Cardresult gagnant={item[2]+""+item[3]} prixwin={item[4]} date={FormatDate(item[5])}></Cardresult>
             ))}      
          </div>
        );
} 

export function Cardresult({gagnant,prixwin,date}){
  return(
      <div className="d-flex justify-content-center">
        <div className="col-sm-6">
          <div className="container py-3">
            <div className="card   rounded shadow-lg border-0">
                 <br/>
                <Column>Gagnant : {gagnant}</Column>
                <hr  style={{background:'blue'}}/>
                <Column>Prix Gagnant : {prixwin} ar</Column>
                <hr/>
                <Column>Date heure d' obtention : {date}</Column> 
            </div>
          </div>   
       </div>
     </div> 
   );
}     
export function Column({children})
{
  return(
       <p className="large text-muted font-Arial">{children}</p>
  );
}          
 
