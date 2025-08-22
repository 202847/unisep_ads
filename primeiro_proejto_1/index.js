var nome = "Bruno";
var salario =150.0;
var status = true;


const pessoas = [];

pessoas.push("Bruno");
pessoas.push("Gabriel");

const aluno = {
    nome : "Bruno",
    RA : "123456",
    email: "steinickbruno@gmail.com"

};

aluno.telefone = "46 999202847"

console.log('nome: ',nome)
console.log("salario:" , salario);
console.log("situação:", status);
console.log("pessoas:", pessoas);
console.log("total de pessoas:", pessoas.length);
console.log("aluno:", aluno);


for(var i = 0; i < pessoas.length ; i++){
    console.log(pessoas[i]);
};



