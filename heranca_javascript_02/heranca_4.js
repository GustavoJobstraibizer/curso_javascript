var Homem = function(nome, idade) {
	this.nome = nome;
	this.idade = idade;
};

Homem.prototype.sexo = 'masculino';

var joao = new Homem('João', 20);
console.log(joao);
console.log(joao.sexo);


var _new = function(f, nome, idade) {
	var obj = {};
	obj.__proto__ = f.prototype;
	f.apply(obj, Array.prototype.slice.call(arguments, 1));
	return obj;
};

var gu = _new(Homem, "Gustavo", 25);
console.log(gu);

var pedro = {};
pedro.__proto__ = Homem.prototype;
Homem.call(pedro, 'Pedro', 18);
console.log(pedro);
console.log(pedro.sexo);