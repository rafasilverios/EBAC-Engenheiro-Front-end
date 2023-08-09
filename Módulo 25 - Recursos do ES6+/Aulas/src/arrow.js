// const minhaFuncao = () => {
//     console.log("Diz olá");
// }

// minhaFuncao();

// const minhaFuncao = () => {
//     return "Diz olá";
// }

// console.log(minhaFuncao());

const minhaFuncao = () => "Diz olá";

console.log(minhaFuncao());



// const retornaUmCarro = () => {
//     return {
//         modelo: 'Ka',
//         fabricante: 'Ford'
//     }
// }

// console.log(retornaUmCarro());

const retornaUmCarro = () => ({
    modelo: 'Ka',
    fabricante: 'Ford'
})
    

console.log(retornaUmCarro());



const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10;
    },
    frear: () => {
        this.velocidadeAtual -= 10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);