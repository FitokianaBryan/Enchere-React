import logo from './logo.svg';
import './App.css';
import { UserIndividual } from './UserIndividual';
import { ListEnchere } from './ListEnchere';
import { EditUser } from './EditUser';
import User  from './User';
import React,{ useState } from 'react';
import { Tab,Tabs,Application,App1 } from './Template';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Example} from './Example';
import Login from './Login';
import { FicheEnchere } from './FicheEnchere';
import { Redirect, Redirects }  from './Redirects';
import {ReEncherir} from './ReEncherir';
import {Logout} from './Logout';
import { Resultat } from './Resultat';
import {Historique} from './Historique';
import {Compte} from './Compte';
function App({children}) {
    //creation de composant Tabs et composant enfant Tab
    /*return <Tabs>  
      <Tab title="first_onglet" >voici mon premier template</Tab>  
      <Tab title="second_onglet">voici mon deuxieme template</Tab>
    </Tabs>*/
    /*return <div className="App">
    <Application>
        <App1 title="User"><User/></App1>
        <App1 title="ListUser"><ListUser/></App1>
        <App1 title="EditUser"><EditUser/></App1>
    </Application>
  </div>*/
  return (
     <div className="App">
        <BrowserRouter>
              <Routes>
                  <Route path='/listEnchere' element={<ListEnchere/>} exact></Route>
                  <Route path='/editUser' element={<EditUser/>} exact></Route>
                  <Route path='/user' element={<User/>} exact></Route>
                  <Route path='/redirect' element={<Redirects/>} exact></Route>
                  <Route path='/' element={<ListEnchere/>} exact></Route> 
                  <Route path='/login' element={<Login/>} exact></Route> 
                  <Route path='/ficheEnchere/:id' element={<FicheEnchere/>} exact></Route>
                  <Route path='/Encherir/:id' element={<ReEncherir/>} exact></Route>
                  <Route path='/Resultat/:id' element={<Resultat/>} exact></Route>
                  <Route path='/Historique' element={<Historique/>} exact></Route>
                  <Route path='/Compte' element={<Compte/>} exact></Route>  
                  <Route path='/logout' element={<Logout/>} exact></Route> 
              </Routes> 
        </BrowserRouter>    
     </div>
  );
}
export default App;
