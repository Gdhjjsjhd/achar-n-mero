var numeroParaEncontrar = 0;
var tentativas =  0;

function atualizar() {
    var numeroDoInput = document.
        getElementById('inputNumero');

    numeroDoInput.value = ''

    numeroParaEncontrar = parseInt(Math.random() * 100)

    console.log("Numero  para encontrar: " + numeroParaEncontrar)
    
}

atualizar()

function verificaNumeros() {

    var input = document.
    getElementById('inputNumero');

    var numero = input.value;

    if(numero > 100 || numero < 0){
        alert("Opição inválida! Difite de 0 à 100")
        return;
    }else if (numero > numeroParaEncontrar) {
        tentativas++;
        alert('O número é menor')
    } else if(numero < numeroParaEncontrar){
        tentativas++;
        alert('O número é maior')
    } else{
        alert('Parabéns, você acertou em: ' +  tentativas + 'Tentativas!🐱‍👤')
        refresh()
    }
}