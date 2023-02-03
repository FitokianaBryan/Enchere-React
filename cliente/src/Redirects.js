
import { Tab,Tabs,Application,App1 } from './Template';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import { UserIndividual } from './UserIndividual';
import {  ListEnchere } from './ListEnchere';
import { EditUser } from './EditUser';
import User  from './User';
import React,{ useState } from 'react';
import {Example} from './Example';
import Login from './Login';

export  function Redirects(){
  
  function Historique() {
      const token = localStorage.getItem('token');
      if(token)
      {
        window.location.href = '/Historique';
      }
      else {
        alert("Vous devez être connecté pour accéder à cette page");
        window.location.href = '/redirect';
      }
  }
  
  return(
          <div className="App">
           <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" href="/listEnchere">liste enchère</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="/login">login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="/Compte">Compte User</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="/logout">log out</a>
      </li>
      <li className="nav-item">
         <button className="nav-link active " style={{backgroundColor: 'inherit',border:'none'}}  onClick={() => Historique()}>Voir historique</button>
      </li>
    </ul>
      </div>
    </div>
  </nav>
  </div>
    );
}