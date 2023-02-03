const express=require('express')
const router=express.Router()

const mongoose=require('mongoose')
const eschema=mongoose.Schema
const shemauser=new eschema({
    nombre:String,
    email:String,
    telephone:String,
    iduser:String
})

const ModelUser=mongoose.model('user',shemauser)
module.exports=router
/*
router.get('/exemple',(req,res)=>{
    res.end("salut test de routage")
})*/

router.get('/usertest',(res,req)=>{
      const newuser=new ModelUser({
          nombre:req.body.nombre,
          email:req.body.email,
          telephone:req.body.telephone,
          iduser:req.body.iduser
      }) 
      newuser.save(function(err){
         if(!err){
              res.send("ajout avec succes")
         }
         else{
            console.log(err)
         }
      })
})