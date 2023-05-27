const express = require("express");

const server = express();
server.use(express.json());

let receita = [
    {   
        id                : 1,
        name              : "Cuca Maluca",
        description       : "Pão com massa de canela",
        timePreparation   : "30 minutes"
    },
    {   
        id                : 2,
        name              : "Pão",
        description       : "Pão caseiro",
        timePreparation   : "1 hour"
    },
    {   
        id                : 3,
        name              : "Pavê",
        description       : "Bolacha com creme e chocolate",
        timePreparation   : "45 minutes"
    }
];

server.get("/recipe",(req,res)=>{
    res.json({
        receita
    })
})

server.get("/recipe/:id", (req,res)=>{
    const id = Number(req.params.id);
    const rec = receita.find((rec)=>{
        return rec.id===id;
    });
    res.json({
        rec
    })
})

server.post("/recipe", (req,res)=>{
    const newReceita = {
        id                : receita.length+1,
        name              : req.body.name,
        description       : req.body.description,
        timePreparation   : req.body.timePreparation
    };
    receita.push(newReceita);
    res.json({
        receita: newReceita
    });
});

server.put("/recipe/:id", (req,res)=>{
    const id = Number(req.params.id)
    const change = receita.find((change)=>{
        return change.id===id
    });
    
    if(!receita) {
        return res.status(404).send("receita not found");
    }

    change.name               = req.body.name;
    change.description        = req.body.description;
    change.timePreparation    = req.body.timePreparation;
    
    res.json({
        change
    })
})

server.delete("/recipe/:id",(req,res)=>{
    const id = Number(req.params.id);
    receita = receita.filter((rec)=>{
        return rec.id!=id;
    })
    
    res.status(204).send()
})

const port = 8080;

server.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})