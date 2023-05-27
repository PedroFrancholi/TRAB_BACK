const express = require("express");

const server = express();

const port = 8080;

let Receita = [
{   
    "id"            : 1,
    "name"          : "Cuca Maluca",
    "description"   : "Pão com massa de canela",
    "preparation"   : "Bater a massa até ficar homogênea"
},
{   
    "id"            : 2,
    "name"          : "Pão",
    "description"   : "Pão caseiro",
    "preparation"   : "Bater a massa, assar e servir"
},
{   
    "id"            : 3,
    "name"          : "Pavê",
    "description"   : "Bolacha com creme e chocolate",
    "preparation"   : "Colocar a bolacha na forma e adicionar creme e chocolate"
}
]



server.get("/recipe",(req,res)=>{
    res.json({
        Receita
    })
})

server.get("/recipe/:id",(req,res)=>{
    const id = Number(req.params.id);
    const action = Receita.find((action)=>{
        return action.id===id;
    });
    
    res.json({
        Receita
    })
})

server.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})