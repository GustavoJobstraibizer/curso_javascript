var homem  = {
	sexo: 'masculino'
};

var joao = Object.create(homem);
joao.nome = 'João',
joao.idade = 20;

var pedro = {
	nome: 'Pedro',
	idade: 18
};

console.log(joao);
console.log(joao.sexo);
console.log(pedro);