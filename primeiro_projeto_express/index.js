const express = require("express");

const app = express();

app.get("/alunos", (request, response)=>{

const filtro = request.query.filtro;

console.log(filtro);

    const alunos = [
       {nome: "Bruno"},
       {nome: "Guilherme"},
       {nome: "Jocemar"},
       {nome: "Lucas"} 
    ]
    response.send(alunos);
});




app.listen(8080, ()=> {
    console.log("o servidor esta rodando na porta 8080")
});