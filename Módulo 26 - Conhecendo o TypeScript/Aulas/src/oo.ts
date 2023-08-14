class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda
    }

    dizOla(): string {
        return `${this.nome} disse oi`;
    }
}

class ContaBancaria {
    protected saldo: number = 0;
    numeroDaConta: number;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }

    static retornaNumeroDoBanco() {
        return 125
    }

    private getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123456);
// contaDoPedro.
ContaBancaria.retornaNumeroDoBanco();