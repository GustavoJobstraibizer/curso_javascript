var homem  = {
	sexo: 'masculino'
};

var joao = {
	nome: 'joao',
	idade: 20
};

// seto o atributo sexo de homem para o prototype de joao
Object.setPrototypeOf(joao, homem);

var pedro = {
	nome: 'Pedro',
	idade: 18
};

console.log(joao.sexo);
console.log(pedro);