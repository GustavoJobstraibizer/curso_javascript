// criando objetos com function construtora
var Homem = function(nome, idade) {
	this.nome = nome;
	this.idade = idade;
	this.sexo = 'masculino';
};

var joao = new Homem('João', 20);

var pedro = {};

//Homem.call(pedro, 'Pedro', 18);
Homem.apply(pedro, ['Pedro', 18]);

console.log(joao);
console.log(pedro);