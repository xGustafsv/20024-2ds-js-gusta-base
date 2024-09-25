// alguns erros: 

let numero = 12 // o JavaScript e sensivel ao caps lock
// Erro de declaraçao, variavel não declarada 

//console.log(numero // Erro de sintaxe; falta de parenteses

// tratamento de erros
// declara um erro para outro usuario;

const idademinima = 18
let idadeCliente =19

if(idademinima>=idadeCliente){
    console.log('cerveja')
} else{
    console.log('sucos')
}

// valor ternario
idadeCliente = 20

// modo ternario,_____<=_____?-----:-----
//modoternarario,____==______?-----:-----
console.log(idadeCliente >= idademinima ? 'cerveja' : 'suco' )
                    //funçao arrow, conpletamente diferente de maior igual

//utilisar com cuidado 

const nome = gustavo
const idade = 16
const cidadeNacimento = cascavel

const apresentacao = 'Meu nome é' + nome + "tenho" + idade + 'anos e naci é'+ apresentacao +

console.log(apresentacao)

// tenplate string 


