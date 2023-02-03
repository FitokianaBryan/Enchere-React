import React, { useState } from "react";
import {Redirects} from "./Redirects";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function Card({description1,prixminimumvente1,dateheureenchere1,durreenchere1,statuts1,onclick1,boutton}){
    return(         
        <div className="col" style={{marginRight:'10px'}}>
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-bg-primary border-primary">
          <h4 className="my-0 fw-normal">{description1}</h4>
        </div>
        <div className="card-body">
          <p>Prix minimum de vente : <h1 className="card-title pricing-card-title">{prixminimumvente1} <small className="text-muted fw-light">ar</small></h1></p>
          <ul className="list-unstyled mt-3 mb-4">
            <li>date debut : {dateheureenchere1}</li>
            <li>durree : {durreenchere1} mn</li>
            <li>statut : {statuts1}</li>
          </ul>
            <button onClick={onclick1} className="btn btn-primary">
            Voir ficheEnchere
            </button>
            <p>{boutton}</p>
        </div>
        </div>
      </div>
    )
} 
