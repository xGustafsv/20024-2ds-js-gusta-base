//tipo number

const numero = 6

const numeroUm = 1
const numeroDois = 2

const operacaoMatematica = numeroUm + numeroDois

    //outras operações matematicas: - para subtração; * para multiplicação e / para divisão

console.log(operacaoMatematica)

//ponto Flutuante

const numeroDecimal = 3.5
const numeroDecimal2 = .5

const operacaoFlutuante = numeroUm / numeroDecimal

console.log(operacaoFlutuante)

//NaN -> Not a Number (Não é um número)

const meuNome = "None"

const naoEnumero = meuNome * numeroDecimal
const naoEnumero2 = meuNome / 7

console.log(naoEnumero)
console.log(naoEnumero2)

//Dados tipo String = textos

const texto1 = "Meu nome é:"
const texto2 = 'é muito "lindo"'
    //ou pode ser: "é muito 'lindo'"
const senha = "macacopretoelindo"
const umNumeroTexto = '50'

const situacao01 = texto1 + meuNome
const situacao02 = umNumeroTexto + numeroUm
const situacao03 = situacao02 + 2

console.log(situacao01)
console.log(situacao02)
console.log(situacao03)

//Bollean
//True -> verdadeiro
//False -> falso

const contaBooleanaFalsa = numeroUm === numeroDois
const contaBooleanaVerdadeira = (numeroUm + numeroUm) === numeroDois
const boleanaString = texto1 === texto2

console.log(contaBooleanaFalsa)
console.log(contaBooleanaVerdadeira)
console.log(boleanaString)

//var - primeira foram de escrever uma variavel no JS

var altura = 5
var comprimento = 7

area = altura * comprimento
console.log(area)
var area;

//let - Maneira de declarar uma variavel que muda de valor durante o programa

let forma = 'retangulo'
let altura = 5
let comprimento = 7
let area

if (forma === 'retangulo'){
    area = altura * comprimento
} else {
    area = (altura * comprimento) / 2
}

//const - Utiliszado para criar variaveis que são fixas, não sendo possivel altera-las

const Forma = 'triangulo'
const Altura = 5
const Comprimento = 7
let CArea

if (Forma === 'retangulo') {
    CArea = Altura * Comprimento
} else {
    area = (Altura * Comprimento) / 2
}

console.log(CArea)


//Boolean
const usuarioLogado = true
const contaPaga = false

//truthy ou falsy
// 0 -> false
// 1 -> true

console.log(0 == false)//retorna true
console.log("" == false)//retorna true
console.log(1 == false)//retorna true

//undefined
//null -> vazio ou nada

let minhaVar
let varNull = null

console.log(minhaVar)
console.log(varNull)

console.log("Quanto o undefined está em sua forma pura")

let numero8 = 3
let texto = "Alura"

console.log(typeof numero)
console.log(typeof texto)


console.log(typeof minhaVar)
console.log(typeof varNull)

//conversão implicita
const numeroNumber = 90
const numeroString = "90"

console.log(numeroNumber == numeroString)
console.log(numeroNumber === numeroString)
console.log(numeroNumber + numeroString)

//conversão explicita
    //Number() - Converte para número
    //String() - Converte para uma string
console.log(numeroNumber + Number(numeroString))

const numeroConvertido = Number(numeroString)

console.log(numeroNumber + numeroConvertido)

const numeroConvertidoErrado = Number("456a")

console.log(numeroNumber + numeroConvertidoErrado)
