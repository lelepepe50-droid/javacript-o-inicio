// Boas práticas
/*visam melhorar a legibilidade, manutenção e qualidade do código, além de evitar erros comuns.*/


// Case sensitive
/* o que significa que a capitalização diferencia maiúsculas de minúsculas. Isso se aplica a nomes de variávei */
console.log("olá mundo!")

// Sintaxe básica e comentário
/*
//uma linha
/*
varias
linhas
*/

// Declaração de variáveis(var, let, const)
let nome ="leandro"
console.log(" olá " + nome)
nome = "andrade"
console.log(nome)

const idade = 19
console.log( "tenho",idade)
/*são usados para declarar variáveis, mas diferem principalmente em escopo (onde a variável é acessível) e mutabilidade (se o valor pode ser alterado).*/

// Console e Debug
/* é o processo de encontrar e corrigir erros, conhecidos como "bugs", em programas de computador, aplicativos ou hardware*/

//Tipos de dados
/*
inteiro - int
real - float
booleano - bool
texto - string
*/
//string
let cidade = "americana"

//Number
let salario = "1000"

//bool
let fumante = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)

console.log("-----------")
salario="2000"
console.log( typeof salario)


// Operadores
//     Operador Atribuição ( = )
salario = 2500

//     Operadores aritméticos ( +,-,*,/,% )
let n1 = 10, n2= 5
console.log(n1+n2)//soma
console.log(n1-n2)//subtração
console.log(n1*n2)//mutiplicação
console.log(n1/n2)//divisão
console.log(10%3) //módulo 


//     Operadores relacionais(==,!=,>,<,>=,<=)
console.log(n1 == n2) // igual/igualdade
console.log(n1 != n2)// diferente
console.log(n1 >= n2)//maior
console.log(n1 <= n2)//menor ou igual


//     Operadores lógicos !-NÃO|NOT ||-OU/QR e|AND
let altura = 1.7
let peso = 79
let tipo = "criança"

//muda o resultado final, se for verdadeiro vira falso e se falso vira verdadeira
console.log(altura > 1.5 || peso < 150 || tipo != "criança")

// com || apenas uma verificação precisa ser verdadeira
console.log(altura > 1.5 || peso < 150 || tipo !="criança")


// com && todas as virificações devem ser verdeira para o resuldatos final ser vedardeiro
console.log(altura > 1.5 && peso <150 && tipo != "criança")


 
// Estrutura
// Estrutura de controle/decisão
let carro ="fiat palio"

if(carro == "parati"){
    console.log("vc ta bem mais ou menos")//verdadeiro
}else{
    console.log("a vida ta progredindo")//falso
}

let idadealuno = 20
if(idadealuno >= 18){
    console.log("maior de idade")
}
else{
    console.log("menor de idade")
}

// Laços de repetição
let controle = 1
while(controle <= 10){
    console.log(7*controle)
    controle = controle + 1
}

// Arrays --> vetor
let zoologico = ['leão','elefante','sebra','ariranha','lobo guará', 'arara']
console.log (zoologico [2])
console.log (zoologico.length)
console.log("zoologico")

let frutas = ['🍓','🍊','🍍','🍌','🍇','🍉']
console.log(frutas)
frutas.push('🍎')
console.log(frutas)

let alunos = []
alunos.push("joão")
alunos.push("leandro")
alunos.push("roberto")
console.log(alunos)

// Funções personalizadas
function mensagem(){
    console.log("olá")
    console.log("seja bem vindo")
    console.log(":)")
}
mensagem()
mensagem()

function conta(horas,sal_hora){
    console.log(horas * sal_hora)
}

Conta(140, 75)