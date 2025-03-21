var prompt = require("prompt sync")
var numero1, numero2, resultado;
var operador;
varcontinuar = true;

function soma (a, b) {
    return a + b;
}

function subtracao (a, b) {
    return a - b;
}

function multiplicacao (a, b) {
    return a * b;
}

function divisao (a, b) {
    return a / b;
}

while (continuar) {
    console.log ("1. Soma")
    console.log ("2. Subtração")
    console.log ("3. Multiplicação")
    console.log ("4. Divisão")
    operacao = Number(prompt ("Informe a Opreação Desejada:"))
    //pedir os numeros
    numero1 = Number (prompt("informe o 1 n°"));
    numero2 = Number (prompt("informe o 2 n°"));
    //Condição de escolha
    switch (operacao) {
        case 1:
            resultado = soma(numero1,numero2)
            console.log("O resultado é" +resultado)
            break;

        default:
            break;
    }
    switch (operacao) {
        case 2:
            resultado = subtracao(numero1,numero2)
            console.log("O resultado é" -resultado)
            break;

        default:
            break;
    }
    switch (operacao) {
        case 3:
            resultado = multiplicacao(numero1,numero2)
            console.log("O resultado é" *resultado)
            break;

        default:
            break;
    }
    switch (operacao) {
        case 4:
            resultado = divisao(numero1,numero2)
            console.log("O resultado é" /resultado)
            break;

        default:
            break;
    }
}
