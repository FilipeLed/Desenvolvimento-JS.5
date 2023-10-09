
// Objeto Banco
var Banco = {
    conta: "123456", // Número da conta
    saldo: 3000, // Saldo inicial
    tipoConta: "Corrente", // Tipo de conta
    agencia: "7890", // Número da agência

    // Método para buscar o saldo
    buscarSaldo: function() {
        return this.saldo;
    },

    // Método para realizar depósito
    deposito: function(valor) {
        this.saldo += valor;
        return "Depósito de R$" + valor + " realizado. Novo saldo: R$" + this.saldo;
    },

    // Método para realizar saque
    saque: function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return "Saque de R$" + valor + " realizado. Novo saldo: R$" + this.saldo;
        } else {
            return "Saldo insuficiente para realizar o saque.";
        }
    },

    // Método para retornar o número da conta
    numeroDaConta: function() {
        return this.conta;
    }
};

// Exemplos de uso
console.log("Número da Conta: " + Banco.numeroDaConta());
console.log("Saldo Atual: R$" + Banco.buscarSaldo());
console.log(Banco.deposito(500));
console.log(Banco.saque(200));
console.log(Banco.saque(1500)); // Tentando sacar mais do que o saldo disponível
