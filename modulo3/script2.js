
// Métodos de manipulação com datas (1/3)



// Usando Objeto - new Date()


let data = new Date()

console.log(data)


// Usando Objeto - new Date() com data resumida


let data = new Date()

console.log(data.toDateString())



// Usando Objeto - new Date() com fuso horário europeu


let data = new Date()

console.log(data.toUTCString())



// Usando Objeto - new Date() transformando em String


let data = new Date('2020-01-01 15:42:17')

console.log(data.toString())






// Métodos de manipulação com datas (2/3)



// Usando Objeto - new Date() manipulando e pegando apenas o ano


let data = new Date()

let res =  data.getFullYear()

console.log(res)



// Usando Objeto - new Date() manipulando e pegando apenas o mês


let data = new Date()

let res =  data.getMonth() + 1
// em um vetor a data é index 9 + 1

console.log(res)



// Usando Objeto - new Date() manipulando e pegando apenas o dia 


let data = new Date()

let res =  data.getDate() 

console.log(res)



// Usando Objeto - new Date() manipulando e pegando apenas o dia da semana

let data = new Date()

let res =  data.getDay() 
// em um vetor o dia da semana incia com index 0 no domingo

console.log(res)



// Usando Objeto - new Date() manipulando e pegando apenas a hora


let data = new Date()

let res =  data.getHours()

console.log(res)



// Usando Objeto - new Date() manipulando e pegando apenas os minutos


let data = new Date()

let res =  data.getMinutes()

console.log(res)



// Usando Objeto - new Date() manipulando e pegando apenas os milissegundos


let data = new Date()

let res =  data.getMilliseconds()

console.log(res)






// Métodos de manipulação com datas (3/3)


// Usando Objeto - new Date() usando o set para passar informações de datas



let data = new Date()

data.setFullYear( data.getFullYear() + 3 )

let res = data

console.log(res)





// Métodos de matemática



// Usando Objeto - Math para cálculos, PI


let valor = Math.PI

let res = valor

console.log(res)




// Usando Objeto - Math para cálculos, arredondamento


let numero = 4.76656
let valor = Math.round(numero)

let res = valor

console.log(res)



// Usando Objeto - Math para cálculos, arredondamento para baixo


let numero = 4.76656
let valor = Math.floor(numero)

let res = valor

console.log(res)



// Usando Objeto - Math para cálculos, arredondamento para cima


let numero = 4.76656
let valor = Math.ceil(numero)

let res = valor

console.log(res)



// Usando Objeto - Math para cálculos, identificando qual o menor número


let valor = Math.min(45,3,9,2)

let res = valor

console.log(res)



// Usando Objeto - Math para cálculos, identificando qual o maior número

let valor = Math.max(45,3,9,2)

let res = valor

console.log(res)



// Usando Objeto - Math para cálculos, randomicos

let valor = Math.floor(Math.random() * 100)

let res = valor

console.log(res)



// Criando um timer 




let timer;

function parar() {
    clearInterval(timer)
}

function comecar() {
    timer = setInterval(exibirHora, 1000)
}



function exibirHora() {
    let data = new Date()

    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundos = data.getSeconds()

    let texto = hora + ' ' + ' ' + minuto + ' ' + segundos

    document.getElementById('demo2').innerHTML = texto
}



// Criando um timer  - setTimeOut


let timer;

function rodar() {
    timer = setTimeout(function() {
        document.querySelector('.demo2').innerHTML = 'rodou'
    }, 2000)
}

function parar2() {
    clearTimeout(timer)
}



// Template Strings

let nome = 'Giovanni'

let sobrenome = 'Carvalho'

let nomeCompl = ` Meu nome é ${nome} ${sobrenome}`

console.log(nomeCompl)