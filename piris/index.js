import express from "express";

const app = express();

const usuarios = [];

app.use(express.json());



app.post("/cadastro", (request, response) =>{
    const { nome, usuario, senha } = request.body;
    
    usuarios.push({nome, usuario, senha});

    response.send({msg: "Parabens neymar você é idolo mesmo, tudo certo!"});

}); 

app.post("/login", (request, response) => {
  const { usuario, senha } = request.body;

  const data = usuarios.find(i => i.usuario == usuario);

  if (data) {
    if (data.senha == senha) {
      return response.send({msg: "login realizado com sucesso!"})
    } else {
      return response.send({msg: "usuario ou senha invalido!"})
    }
  } else {
    return response.send({msg: "usuario ou senha invalidos!"})
  }


})

app.listen(8080, () => {
    console.log("O servidor esta rodando na porta 8080!");
});


