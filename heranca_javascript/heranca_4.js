var homem = {
	sexo: 'masculino'
};

var joao = {
	nome: 'Joao',
	idade: 20,
	sexo: 'feminino'
};

delete joao.sexo;

Object.setPrototypeOf(joao, homem);

console.log(joao);
console.log(joao.sexo);

for (var property in joao) {
	if (!joao.hasOwnProperty(property)) continue;
		console.log(property);
}