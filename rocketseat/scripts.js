let firstNumber = prompt('Digite um número de sua escolha')
let secondNumber = prompt('Digite outro número de sua escolha')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const som = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + som)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + mult)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)