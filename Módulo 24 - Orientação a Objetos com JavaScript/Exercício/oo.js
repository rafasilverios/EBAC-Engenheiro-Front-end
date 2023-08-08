function ContaCorrente(nome, tipoConta, cpf, saldo) {
    this.nome = nome;
    this.tipoConta = tipoConta;
    
    let _cpf = cpf;
    let _saldo = saldo;

    this.getCpf = function() {
        return _cpf
    }

    this.getSaldo = function() {
        return _saldo
    }

    this.setSaldo = function(valor) {
        if (typeof valor === 'number') {
            _saldo = valor
        }
    }
}

function Basic(nome, cpf, saldo) {
    ContaCorrente.call(this, nome, "Conta Básica", cpf, saldo);

    this.rendimento = function() {
        const novoSaldo = this.getSaldo() * 1.01;
        this.setSaldo(parseFloat(novoSaldo.toFixed(2)));
    };
}

function Premium(nome, cpf, saldo) {
    ContaCorrente.call(this, nome, "Conta Premium", cpf, saldo);

    this.rendimento = function() {
        const novoSaldo = this.getSaldo() * 1.05;
        this.setSaldo(parseFloat(novoSaldo.toFixed(2)));
    }
}

function Deluxe(nome, cpf, saldo) {
    ContaCorrente.call(this, nome, "Conta Deluxe", cpf, saldo);

    this.rendimento = function() {
        const novoSaldo = this.getSaldo() * 1.1;
        this.setSaldo(parseFloat(novoSaldo.toFixed(2)));
    }
}

const correntista1 = new Basic('Joao', 12345678900, 1000);
const correntista2 = new Premium('Maria', 99987654321, 2000);
const correntista3 = new Deluxe('Jose', 32165498701, 3000);

console.log(correntista1);
console.log(`Saldo atual: ${correntista1.getSaldo()}`);
correntista1.rendimento();
console.log(`Saldo previsto após rendimento de 1 mês é de: ${correntista1.getSaldo()}`);

console.log(correntista2);
console.log(`Saldo atual: ${correntista2.getSaldo()}`);
correntista2.rendimento();
console.log(`Saldo previsto após rendimento de 1 mês é de: ${correntista2.getSaldo()}`);

console.log(correntista3);
console.log(`Saldo atual: ${correntista3.getSaldo()}`);
correntista3.rendimento();
console.log(`Saldo previsto após rendimento de 1 mês é de: ${correntista3.getSaldo()}`);