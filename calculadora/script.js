let resultado = document.getElementById("display")

function addToDisplay(valor) {
    return resultado.value += valor
}

function clearDisplay(deletar) {
    return resultado.value = ''
}

function calculate() {
    return resultado.value = eval(resultado.value)
}