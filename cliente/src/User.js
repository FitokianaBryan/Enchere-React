import React, { useState } from "react"
import {  ListEnchere } from "./ListEnchere"
import uniquid from 'uniqid'
import axios from 'axios'
import {useFetch } from "./CallWebService";
import { Field } from "./Field";
import './CSS/User/style.css'
export default function User(){

    const [nombre,setnombre]=useState('')
    const[email,setemail]=useState('')
    const[telephone,settelephone]=useState('')
    const[mdp,setMdp]=useState('')
    function userclick(){
        var identity={
            nombre:nombre,
            email:email,
            telephone:telephone,
            mdp:mdp
        }
        console.log(identity);
        
    }
    return(
        <div class="wrapper">
        <div class="form-left">
            <h2 class="text-uppercase">S'inscrire</h2>
            <p class="text">
                <span>Inscription: </span>
                Inscrivez-vous pour pouvoir participer à plusieurs enchères qui en valent la peine qu'on prête attention.
            </p>
            <p>Apeès vous être isncrit, vous pourez vous lancer dans un monde où l'argent règne.</p>
        </div>
        <form class="form-right">
            <h2 class="text-uppercase">Inscription</h2>
            <div class="mb-3">
                <label>Mot de passe</label>
                <input type="password" onChange={(e)=>{setMdp(e.target.value)}} value={mdp} id="first_name" class="input-field" />
            </div>
            <div class="mb-3">
                <label>Nombre</label>
                <input type="number" onChange={(e)=>{setnombre(e.target.value)}} value={nombre} id="last_name" class="input-field" />
            </div>
            <div class="mb-3">
                <label>Adresse mail</label>
                <input type="email" class="input-field" name="email" onChange={(e)=>{setemail(e.target.value)}} value={email} required />
            </div>
            <div class="mb-3">
                    <label>Téléphone</label>
                    <input type="text" onChange={(e)=>{settelephone(e.target.value)}} value={telephone} class="input-field" />
            </div>
            <div class="form-field">
                <button onClick={userclick} type="submit" class="register">S'inscrire</button>
            </div>
        </form>
    </div>
    );
} 
