import express from "express";  // Fazer a importação da biblioteca express

//const não sofre uma mutação

const app = express();  

app.use(express.json());

app.get('/', (request, response) =>{
    response.send('Roubaram minha maquita!')

});

app.post("/Aluno"[validaNome, validaRa], (request, response ) =>{
    const{ nome, ra } = request.body;
    console.log({nome, ra});
    response.send({ nome, ra});

});



function validaNome(req, res, next){
    const { nome, ra} = req.body
    if(nome){
        res.send({
            msg: 'É obrigatório enviar o campo nome no Body!'
        })
    }

    next();
}


function validaRa(req, res, next){
    const { nome, ra} = req.body
    if(nome){
        res.send({
            msg: 'É obrigatório enviar o campo ra no Body!'
        })
    }

    next();
}



app.listen(8080, ()=> {
    console.log('Servidor está rodando na porta 8080!')
});