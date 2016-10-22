// function fabrica
var criar = function(nome, idade) {
	return {
		nome: nome,
		idade: idade,
		sexo: 'masculino'
	};
};

var joao = criar('João', 20);
var pedro = criar('Pedro', 18);

console.log(joao);
console.log(pedro);