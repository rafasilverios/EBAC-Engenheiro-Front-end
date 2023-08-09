const alunosENotas = [
    { nome: "Alice", nota: 7 },
    { nome: "Bob", nota: 5 },
    { nome: "Carol", nota: 8 },
    { nome: "David", nota: 4 },
    { nome: "Monik", nota: 9 },
    { nome: "Frank", nota: 6 },
    { nome: "Grace", nota: 7 },
    { nome: "Henry", nota: 3 },
    { nome: "Isabella", nota: 8 },
    { nome: "Jack", nota: 5 },
    { nome: "Kate", nota: 6 },
    { nome: "Liam", nota: 9 },
    { nome: "Mia", nota: 4 },
    { nome: "Noah", nota: 7 },
    { nome: "Olivia", nota: 8 },
    { nome: "Peter", nota: 5 },
    { nome: "Quinn", nota: 6 },
    { nome: "Ryan", nota: 4 },
    { nome: "Sophia", nota: 9 },
    { nome: "Thomas", nota: 6 },
];

console.log("---------- Lista de Aprovados ----------")
const alunosAprovados = alunosENotas => alunosENotas.nota >= 6;
const listaDeAprovados = alunosENotas.filter(alunosAprovados);
console.log(listaDeAprovados);

// bônus
console.log("---------- Lista de Reprovados ----------")
const alunosReprovados = alunosENotas => alunosENotas.nota < 6;
const listaDeReporovados = alunosENotas.filter(alunosReprovados);
console.log(listaDeReporovados);