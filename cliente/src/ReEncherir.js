import React from "react";
import { useState,useEffect } from "react";
import { Redirects } from "./Redirects";
import { useParams } from "react-router-dom";
import {Field} from "./Field";
export function ReEncherir(){

    let { id } = useParams();
    const [montant,setMontant]=useState();
  
    const Encherir = async () => {
      const donnee = new FormData();
    donnee.append('montant',montant);
    //  const data = new FormData();
     // data.append('montant',montant);

      const token = localStorage.getItem('token');
      if(token) {
        const headers = new Headers();
        headers.append('token', token);
        
        const response = await fetch(`https://enchere-spring-production.up.railway.app/api/HistoriqueOffre/ReEncherir/${id}`, {
          method: 'POST',
          headers: headers,
          body: donnee
        });
        const data = await response.json();
        console.log(data);
        if (data.status === '202') 
        {
          alert(data.message);    
          window.location.href = '/ListEnchere';
        } 
        else {
          alert(data.message);
        }
      } else {
        console.log('Token not found');
      }
      
     };
        return (
          <div className="Listuser">
            <Redirects></Redirects>
          <h1>Rencherir sur l'enchère: {id}</h1>
            <div className="d-flex align-items-center justify-content-center h-100 w-100" style={{marginTop:'100px'}} >
              <div className="card" style={{width:'25rem',boxShadow:'0px 0px 1px 0px 1px'}}>
                <div className="card-body  ">
                  <h1 clasName="text-center">enchere</h1>
                  <Field onChange={(e)=>{setMontant(e.target.value)}} >Votre Montant</Field>
                  <button onClick={Encherir} className="btn btn-success">Valider</button>
                 </div>
               </div>
            </div>
          </div>
        );
} 
