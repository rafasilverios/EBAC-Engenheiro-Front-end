function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];        
    }

    return soma;
    // console.log(arguments);
    // return a + b + c + d;
}

console.log(somar(10, 20, 30, 40));


//rest operator
function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30, 40, 50));


//spread operator
const numeros = [1,2,3,4]
console.log(...numeros)

const timesSP = ["São Paulo FC", "Palmeiras", "Corinthians", "Santos", "Bragantino"];
const timesRJ = ["Flamengo", "Fluminense", "Vasco da Gama", "Botafogo", "Bangu"];

// const timesFutebol = timesSP.concat(timesRJ);
const timesFutebol = [...timesSP, ...timesRJ];

console.log(timesFutebol);


const carroDaJulia = {
    modelo: 'gol',
    marca: 'VW', 
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaJulia);
console.log(carroDaAna);


// desestruturação
// const motorCarroAna = carroDaAna.motor;
const {motor: motorCarroAna} = carroDaAna;
const {motor: motorCarroJulia} = carroDaJulia;

console.log(motorCarroJulia);
console.log(motorCarroAna);


const [item1, item2, item3, ...outrosTimes] = timesFutebol;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);