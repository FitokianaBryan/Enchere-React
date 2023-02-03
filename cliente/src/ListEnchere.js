import React from "react";
import { useState,useEffect } from "react";
import { Redirects } from "./Redirects";
import { Card } from './Card';
import {FormatDate} from "./FormatDate";
import {Rechercheavance} from './Rechercheavance';
import { Field } from "./Field";
import { MDBInput,MDBBtn} from 'mdb-react-ui-kit';
export function ListEnchere(){
      
    //   const {data}=CallWebService("http://localhost:8080/api/enchere/listeEnchere");
       //console.log(data);
       const [data, setData] = useState([]);
       const [redirect, setRedirect] = useState(false);
       const [redirect2, setRedirect2] = useState(false);
       const [idEnchere, setIdEnchere] = useState(null);    
     

       const [minutes, setMinutes] = useState(5);
       const [seconds, setSeconds] = useState(0);

       const[datedebut,setDatedebut]=useState(false);
       const[datefin,setDatefin]=useState(false);
       const[descriptions,setDescriptions]=useState('');
       const[statuts,setStatuts]=useState('');
       const[motcles,setMotcles]=useState('');
     
       useEffect(() => {
         fetch("http://localhost:8080/api/enchere/listeEnchere")
           .then((response) => response.json())
           .then((data) => {
            const encheres = data.map((enchere) => {
              let dateFin = new Date();
              dateFin.setDate(dateFin.getDate() + enchere.durreEnchere);
              enchere.dateFin = dateFin;
              return enchere;
            });
            setData(encheres);
          });
       }, []);

       function voirFiche(id) {
        setIdEnchere(id);
        setRedirect(true);
      }
    
      function Encherir(id) {
        setIdEnchere(id);
        setRedirect2(true);
      }
    
      if (redirect) {
        window.location.href = `/ficheEnchere/${idEnchere}`;
        return null;
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
         function search(){
            const data={
                 datedebut:datedebut,
                 datefin:datefin,
                 descriptions:descriptions,
                 statuts:statuts,
                 motcles:motcles
            }   
            console.log(data);
         }
        return (
          <div className="EditUser">
               <Redirects></Redirects>
               <div className="row" style={{marginTop:'50px'}}>
                       <CardDetail titre={"Recherche"} column={"col-md-4"}>
                             <MDBInput onChange={(e)=>{setDatedebut(e.target.value)}} value={datedebut} wrapperClass='mb-2' label='date debut' id='formControlLg' type='date' size="lg"/> 
                             <MDBInput onChange={(e)=>{setDatefin(e.target.value)}} value={datefin} wrapperClass='mb-2' label='date fin' id='formControlLg' type='date' size="lg"/>
                             <MDBInput onChange={(e)=>{setDescriptions(e.target.value)}} value={descriptions} wrapperClass='mb-2' label='descriptions' id='formControlLg' type='text' size="lg"/>
                             <MDBInput onChange={(e)=>{setStatuts(e.target.value)}} value={statuts} wrapperClass='mb-2' label='status' id='formControlLg' type='text' size="lg"/>
                             <MDBInput onChange={(e)=>{setMotcles(e.target.value)}} value={motcles} wrapperClass='mb-2' label='mots cles' id='formControlLg' type='text' size="lg"/>  
                             <MDBBtn onClick={search}  style={{width:'200px',margin:'auto'}} size='lg'>rechercher</MDBBtn>                      
                        </CardDetail>  
                        <CardDetail titre={"Liste des encheres"} column={"col-md-8"} >
                              {data.map((enchere) => (
                                 <Card description1={enchere.description} prixminimumvente1={enchere.prixMinimumVente} dateheureenchere1={FormatDate(enchere.dateheureenchere)} durreenchere1={enchere.durreEnchere} statuts1={enchere.status === 1 ? "Terminé" : "En cours"} 
                                 onclick1={() => voirFiche(enchere.idenchere)}  boutton={enchere.status !== 1 && (
                                  <button className="btn btn-primary" onClick={() => Encherir(enchere.idenchere)}>
                                    ReEncherir
                                  </button>)} ></Card>
                                ))} 
                        </CardDetail>                
               </div>
          </div>
          /*<div className="EditUser">
             <Redirects></Redirects>
                <div className="row" style={{marginTop:'50px'}}>
                 <div className="d-flex justify-content-center">
                      <div className="col-md-8">
                         <div className="container py-5 shadow-lg border-1">
                            <h3>Listes des encheres</h3>
                            <div className="d-flex justify-content-center">
                                {data.map((enchere) => (
                                 <Card description1={enchere.description} prixminimumvente1={enchere.prixMinimumVente} dateheureenchere1={FormatDate(enchere.dateheureenchere)} durreenchere1={enchere.durreEnchere} statuts1={enchere.status === 1 ? "Terminé" : "En cours"} 
                                 onclick1={() => voirFiche(enchere.idenchere)}  boutton={enchere.status == 1 && (
                                  <button className="btn btn-primary" onClick={() => Encherir(enchere.idenchere)}>
                                    ReEncherir
                                  </button>)} ></Card>
                                ))}
                            </div>
                         </div>
                      </div>
                 </div>
              </div>
            </div>*/
        );
} 

export function CardDetail({children,titre,column}){
  return(
    <div className={column}>
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


