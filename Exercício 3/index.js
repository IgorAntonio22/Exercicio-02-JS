class Binario {
    constructor(valor_do_binario) {
        this.valor_do_binario = '' + valor_do_binario
    }

    passaPraDecimal() {
        var decimal = 0
        for (var i = 0; i < this.valor_do_binario.length; i++) {
            decimal += Math.pow(2, i) * parseInt(this.valor_do_binario.charAt(this.valor_do_binario.length - 1 - i))
        }
        return decimal
    }
}

num = new Binario(prompt('Escreva seu número binário:'))

console.log(num.passaPraDecimal())