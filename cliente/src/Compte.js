import React from "react";
import { useState,useEffect } from "react";
import { Redirects } from "./Redirects";
import axios from 'axios';

export function Compte(){

const [encherisseur, setEncherisseur] = useState([]);
const [vendeur, setVendeur] = useState([]);
const token = localStorage.getItem('token');
const [compte, setCompte] = useState(0.0);
useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) 
    {
      axios
        .get(`https://enchere-spring-production.up.railway.app/api/utilisateur/getCompteUser`, {
          headers: {
            token: token
          }
        })
        .then(res => {
          setCompte(res.data);
        })
        .catch(error => console.log(error));
    }
    else {
        alert("vous devez d`abord vous connecter");
        window.location.href = '/ListEnchere';
    }
  }, []);



return (
    <div className="Listuser">
    <Redirects></Redirects>

    <h1>Compte de l'user</h1>
    <h2>Solde : {compte}Ar</h2>
   </div>
    );
} 
