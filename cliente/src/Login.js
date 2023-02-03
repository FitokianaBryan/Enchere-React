/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState,useEffect } from "react";
import {Field} from "./Field";
//import { Redirects } from "./Redirects";
import { useLocation } from "react-router-dom";
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput} from 'mdb-react-ui-kit';
import { MDBIcon} from 'mdbreact';
import './CSS/Login/Login.css';
import image from './CSS/Login/Image.jpg';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Redirects } from "./Redirects";



export default function Login(){
    const [email,setEmail]=useState('hardi@gmail.com');
    const [password,setPassword]=useState('hardi');
    const [redirect, setRedirect] = useState(false);
    const location = useLocation();
    useEffect(() => {
      if (redirect) {
        setRedirect(false);
        window.location.href = '/redirect';
      }
    }, [redirect, location]);
    
    const loginin = async () => {
     
      const data = new FormData();
      data.append('email',email);
      data.append('mdp', password);
        const response = await fetch('https://enchere-spring-production.up.railway.app/api/utilisateur/login', {
          method: 'POST',
          body: data
         });
        if(response.ok)
        {
         //traitement de la réponse OK
         const data = await response.json();
         console.log(data.datas);
         alert(data.message);
         localStorage.setItem('token',data.datas);
         window.location.href = '/ListEnchere';
        }
        else{
         //traitement de la réponse KO
         console.log("failed");
         alert("erreur");
        }
     };
    return(
      <div className="Listuser">
      <Redirects></Redirects>
      <MDBContainer fluid className="p-3 my-5 h-custom">
        
      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src={image} class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3">Se connecter avec</p>

            <MDBBtn floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon='facebook-f' />
              
            </MDBBtn>

            <MDBBtn floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon="twitter"/>
            </MDBBtn>
          </div>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Ou</p>
          </div>
          <MDBInput onChange={(e)=>{setEmail(e.target.value)}} value={email} wrapperClass='mb-4' label='Adresse Mail' id='formControlLg' type='email' size="lg"/>
          <MDBInput onChange={(e)=>{setPassword(e.target.value)}} value={password} wrapperClass='mb-4' label='Mot de passe' id='formControlLg' type='password' size="lg"/>
          <div className='text-center text-md-start mt-4 pt-2'>
          <MDBBtn onClick={loginin}  className="mb-0 px-5" size='lg'>Se Connecter</MDBBtn>
          </div>

        </MDBCol>

      </MDBRow>
    </MDBContainer>
    </div>
    );
}