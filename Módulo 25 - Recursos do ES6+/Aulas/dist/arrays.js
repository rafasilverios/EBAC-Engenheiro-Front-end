"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'Snapchat', 'Pinterest', 'YouTube', 'TikTok', 'WhatsApp', 'Telegram', 'Reddit', 'Tumblr', 'Flickr', 'Vine', 'Periscope', 'WeChat', 'Viber', 'Skype', 'Google+', 'Orkut'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
console.log('---------------------------------------------');
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("".concat(indice, " - Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ["Alice", "Bob", "Carol", "David", "Eva", "Frank", "Grace", "Helen", "Ivan", "Julia", "Kevin", "Linda", "Michael", "Nina", "Oliver", "Paula", "Quincy", "Rita", "Steve", "Tina", "Uma", "Victor", "Wendy", "Xander", "Yara", "Zane"];
var alunos2 = alunos.map(function (itemAtual) {
  // itemAtual = {
  //     nome: itemAtual,
  //     curso: 'Front-End'
  // }
  // return itemAtual;

  return itemAtual = {
    nome: itemAtual,
    curso: 'Front-End'
  };
});
console.log(alunos2);
var numeros = [1, 2, 3, 4, 5];
var dobroNumeros = numeros.map(function (numeroAtual) {
  // numeroAtual = numeroAtual * 2;
  // return numeroAtual;

  return numeroAtual * 2;
});
console.log(dobroNumeros);
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula';
});
console.log(paula);
var indicePaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula';
});
console.log("O n\xFAmero de chamada da Paula \xE9: ".concat(indicePaula));

// every

alunos2.push({
  nome: 'Lucio',
  curso: 'Back-End'
});
var todosAlunosFront = alunos2.every(function (item) {
  return item.curso === 'Front-End';
});
console.log(todosAlunosFront);
var existeAlunoBack = alunos2.some(function (item) {
  return item.curso === 'Back-End' && item.curso === 'Front-End';
});
console.log(existeAlunoBack);

// function filtraAlunosBack(aluno) {    
//     return aluno.curso === 'Back-End';
// }

var filtraAlunosBack = function filtraAlunosBack(aluno) {
  return aluno.curso === 'Back-End';
}; //arrow function

var alunosBackend = alunos2.filter(filtraAlunosBack);
console.log(alunosBackend);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, ", ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);