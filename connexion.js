const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const objetobd=mongoose.connection
objetobd.on('connected',()=>{
    console.log("connexion reussie a Mongodb")
})

objetobd.on('error',()=>{
    console.log("connexion echoue a Mongodb")
})
module.exports=mongoose