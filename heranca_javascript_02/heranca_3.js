var Homem = function(nome, idade) {
	this.nome = nome;
	this.idade = idade;
};

Homem.prototype.sexo = 'masculino';

var joao = new Homem('João', 20);
console.log(joao);
console.log(joao.sexo);

var pedro = {};
pedro.__proto__ = Homem.prototype;
Homem.call(pedro, 'Pedro', 18);
console.log(pedro);
console.log(pedro.sexo);