import React from "react";
import {Redirects} from "./Redirects";
import {Card} from "./Card";
import { CallWebService } from "./CallWebService";
export function EditUser(){
    const {data}=CallWebService("http://localhost:8080/api/enchere/listeEnchere");
    console.log(data);
    return(
        <div className="EditUser">
             <Redirects></Redirects>
            <h2>listes des encheres</h2>
            <main>
              <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                   {data.map((item) => (
                         <Card description1={item.description} prixminimumvente1={item.prixMinimumVente} dateheureenchere1={item.dateheureenchere} durreenchere1={item.durreEnchere} statuts1={item.status} idenchere1={item.idenchere} idutilisateur1={item.idutilisateur} ></Card>
                   ))}
              </div>   
            </main>
        </div>
    )
} 