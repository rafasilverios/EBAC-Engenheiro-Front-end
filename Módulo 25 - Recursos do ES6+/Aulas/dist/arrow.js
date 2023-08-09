"use strict";

var _this = void 0;
// const minhaFuncao = () => {
//     console.log("Diz olá");
// }

// minhaFuncao();

// const minhaFuncao = () => {
//     return "Diz olá";
// }

// console.log(minhaFuncao());

var minhaFuncao = function minhaFuncao() {
  return "Diz olá";
};
console.log(minhaFuncao());

// const retornaUmCarro = () => {
//     return {
//         modelo: 'Ka',
//         fabricante: 'Ford'
//     }
// }

// console.log(retornaUmCarro());

var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: 'Ka',
    fabricante: 'Ford'
  };
};
console.log(retornaUmCarro());
var carro = {
  valocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    _this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);