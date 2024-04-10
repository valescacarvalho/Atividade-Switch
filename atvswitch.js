
/*1- Sistema de um hotel */
function servicos() {
    var Servicos = document.getElementById("servicos");
    var resServicos = document.getElementById("resServicos");

    var servicos = Number(Servicos.value)

    switch (servicos) {
        case 1:
            resServicos.innerHTML = "Fazer check-in";
            break;
        case 2:
            resServicos.innerHTML = "Chamar serviço de quarto";
            break;
        case 3:
            resServicos.innerHTML = "Fazer pedido";
            break;
        default:
            resServicos.innerHTML = "Estes serviços nao estao disponiveis";
    }
}
/*2- operações matemáticas básicas.*/

function operadores() {
    var num1 = document.getElementById("numero1");
    var num2 = document.getElementById("numero2");
    var Operadores = document.getElementById("operadores");
    var resOperadores = document.getElementById("resOperadores");

    var numero1 = Number(num1.value);
    var numero2 = Number(num2.value);

    switch (Operadores.value) {
        case 'Soma':
            resultado = numero1 + numero2;
            resOperadores.innerHTML = `O resultado da soma é ${resultado}`;
            break;
        case 'Subtração':
            resultado = numero1 - numero2;
            resOperadores.innerHTML = `O resultado da subtração é ${resultado}`;
            break;
        case 'Divisão':
            resultado = numero1 / numero2;
            resOperadores.innerHTML = `O resultado da divisão é ${resultado}`;
            break;
        case 'Multiplicação':
            resultado = numero1 * numero2;
            resOperadores.innerHTML = `O resultado da multiplicação é ${resultado}`;
            break;
        default:
            resOperadores.innerHTML = "Operador inválido";
    }
}

/*3-peso ideal*/
function calcularIMC() {
    var sexo = document.getElementById('sexo');
    var Altura = document.getElementById('Altura');
    var resPeso = document.getElementById('resPeso');

    var altura = Number(Altura.value);

    switch (sexo.value) {
        case 'M':
            var masculino = (altura - 100) * 0.9;
            resPeso.innerHTML = `O seu peso ideal é ${masculino} kg`;
            break;
        case 'F':
            var feminino = (altura - 100) * 0.85;
            resPeso.innerHTML = `O seu peso ideal é ${feminino} kg`;
            break;
    }
}