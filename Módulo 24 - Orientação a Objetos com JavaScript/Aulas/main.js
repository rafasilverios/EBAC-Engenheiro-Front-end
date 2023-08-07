const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log("vrumm")
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log("vrumm")
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar")
    }
}

const carroDoJao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020);

// console.log(carroDoJao2);
// console.log(carroDaMaria2);

const nome = "Rafael";
const idade = 35;
const ehMaiorDeIdade = true;
const conhecimento = ["html", "css", "javascript"];

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimento: conhecimento    
}

// console.log(typeof nome);
// console.log(typeof idade);
// console.log(typeof ehMaiorDeIdade);
// console.log(typeof conhecimento);
// console.log(typeof pessoa);
// console.log(carroDaMaria2 instanceof Carro);
// console.log(conhecimento instanceof Carro);

console.log(pessoa.nome);
console.log(pessoa['nome']);

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo]);
}

exibeAtributo('nome');

pessoa.sobrenome = 'Silverio';

// Object.freeze(pessoa); //torna o objeto imutável
// pessoa.nome = 'joao'; //Não terá efeito se conter "Object.freeze(pessoa)"

if (pessoa.sobrenome) {
    console.log(`o sobrenome dessa pessoa é ${pessoa.sobrenome}`);
}

if (pessoa['idade']) {
    console.log(`a pessoa tem ${idade} anos`);
}

if ('sobrenome' in pessoa) {
    console.log('tem sobrenome');
}


console.log(pessoa.nome);
console.log(pessoa['nome']);

console.log(Object.keys(pessoa).length);
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));