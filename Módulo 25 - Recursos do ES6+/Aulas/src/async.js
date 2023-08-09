function funcaoMuitoPesada() {
    let execucoes = 0;

    for (let i = 0; i < 1000000000; i++) {
                execucoes++;
    }
    return execucoes;
}

const funcaoMuitoPesadaPromisse = new Promise((resolve, reject) => {
    try{
        let execucoes = 0;
    
        for (let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve(execucoes);
    } catch(e) {
        reject('Deu erro na iteração dos numeros');
    }
})

const promisseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000)
    })
}

// console.log("Inicio");
// // console.log(funcaoMuitoPesada());
// funcaoMuitoPesadaPromisse.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
// console.log("Fim");


async function execucaoPrincipal() {
    console.log("Inicio");

    // await funcaoMuitoPesadaPromisse.then(resultado => console.log(resultado)).catch(erro => console.log(erro));

    promisseComParametros('rafael@rafael.com', 123456).then(resultado => {
        console.log(resultado);
    });
    
    try {
        const resultado = await funcaoMuitoPesadaPromisse;
        console.log(resultado);
    } catch (e) {
        console.log(e)
    }

    console.log("Fim");
}

execucaoPrincipal();