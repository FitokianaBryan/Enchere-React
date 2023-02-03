const express=require('express')
const app=express()
//importer la connexion a mongoDB
const archiveBD=require('./connexion')

//diriger un message vers le navigateur
app.get('/',(req,res)=>{
    res.end("Bienvenude dans le serveur back end")
})
// importation de body-parser
const bodyparser=require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:'true'}))

//importer l 'archive routes y compris model user(table)
const routeuser=require('./router/router') 
app.use('/api/router',routeuser)

//configuration de serveur de base
app.listen(5000,function(){
    console.log("serveur configuree")
})