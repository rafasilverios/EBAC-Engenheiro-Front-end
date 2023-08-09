const redesSociais = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'Snapchat', 'Pinterest', 'YouTube', 'TikTok', 'WhatsApp', 'Telegram', 'Reddit', 'Tumblr', 'Flickr', 'Vine', 'Periscope', 'WeChat', 'Viber', 'Skype', 'Google+', 'Orkut'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

console.log('---------------------------------------------')

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`${indice} - Eu tenho perfil na rede social: ${nomeDaRedeSocial}`);
})

const alunos = ["Alice", "Bob", "Carol", "David", "Eva", "Frank", "Grace", "Helen", "Ivan", "Julia", "Kevin", "Linda", "Michael", "Nina", "Oliver", "Paula", "Quincy", "Rita", "Steve", "Tina", "Uma", "Victor", "Wendy", "Xander", "Yara", "Zane"];

const alunos2 = alunos.map(function(itemAtual) {
    // itemAtual = {
    //     nome: itemAtual,
    //     curso: 'Front-End'
    // }
    // return itemAtual;
    
    return itemAtual = {
        nome: itemAtual,
        curso: 'Front-End'
    };
})

console.log(alunos2);



const numeros = [1, 2, 3, 4, 5]
const dobroNumeros = numeros.map(function(numeroAtual) {
    // numeroAtual = numeroAtual * 2;
    // return numeroAtual;

    return numeroAtual * 2;
})

console.log(dobroNumeros);



const paula = alunos2.find(function(item) {
    return item.nome == 'Paula'
})

console.log(paula);

const indicePaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula'
})

console.log(`O número de chamada da Paula é: ${indicePaula}`);

// every

alunos2.push({
    nome: 'Lucio',
    curso: 'Back-End'
})

const todosAlunosFront = alunos2.every(function(item) {
    return item.curso === 'Front-End'
})

console.log (todosAlunosFront);

const existeAlunoBack = alunos2.some(function(item) {
    return item.curso === 'Back-End' && item.curso === 'Front-End'
})

console.log (existeAlunoBack);

// function filtraAlunosBack(aluno) {    
//     return aluno.curso === 'Back-End';
// }

const filtraAlunosBack = aluno => aluno.curso === 'Back-End' //arrow function

const alunosBackend = alunos2.filter(filtraAlunosBack)

console.log (alunosBackend);

const nums = [10, 20, 30, 10];

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma)


let somaComFor = 0

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}

console.log(somaComFor);


const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome}, `;
    return acumulador;
}, '')

console.log(nomesDosAlunos);