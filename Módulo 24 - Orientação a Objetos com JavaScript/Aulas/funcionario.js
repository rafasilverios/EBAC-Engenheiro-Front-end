function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
    this.dizCargo = function() {
        console.log(this.cargo);
    }
}

function Funcionario (nome, cargo, salario) {
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario;

    //getters & setters
    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    //this funcionario
    Pessoa.call(this, nome);
}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiario", 2000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 10000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }
}

// const pessoa1 = new Pessoa("Maria");
const funcionario1 = new Funcionario("Maria", "Dev front-end", 5000);
// const pessoa = new Pessoa("Rafael");
const funcionario2 = new Estagiario("Pedro");
const funcionario3 = new Gerente("Rafael");


funcionario1.dizOi();
funcionario1.dizCargo();
// pessoa.dizCargo(); undefined, pois cargo não existe na função construtora pessoa, apenas  em Funcionario.

// funcionario1.setSalario(7200);

console.log(funcionario1);
funcionario1.aumento();
console.log(funcionario1.getSalario());

console.log(funcionario2);
funcionario2.aumento();
console.log(funcionario2.getSalario());

console.log(funcionario3);
funcionario3.aumento();
console.log(funcionario3.getSalario());