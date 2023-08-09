//map
let meuMap = new Map();
meuMap.set("nome", "Rafael");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("nome"));

// meuMap.clear();

console.log(meuMap.size);

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let entrada of meuMap.entries()) {
    console.log(entrada);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap);


//set
const cpfs = new Set();

cpfs.add('12345678909');
cpfs.add('98765432100');
cpfs.add('11122233344');
cpfs.add('55566677788');
cpfs.add('99900011122');
cpfs.add('44455566677');
cpfs.add('88899900011');
cpfs.add('22233344455');
cpfs.add('66677788899');
cpfs.add('00011122233');

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values ());

cpfs.forEach((valor) => {
    console.log(valor);
})


////// Remover Itens Duplicados ////////
const array = ["Alice", "Bob", "Carol", "David", "Eva", "Frank", "Grace", "Helen", "Ivan", "Julia", "Kevin", "Kevin", "Linda", "Michael", "Nina", "Oliver", "Paula", "Quincy", "Rita", "Steve", "Tina", "Uma", "Victor", "Wendy", "Xander", "Yara", "Zane"];

const arrayComoSet = new Set([...array]);

const arraySemDuplicacao = [...arrayComoSet];

console.log(arrayComoSet);
console.log(arraySemDuplicacao);
////// Remover Itens Duplicados ////////