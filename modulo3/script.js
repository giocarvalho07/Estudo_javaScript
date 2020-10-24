// Métodos de manipulação com string

// descobrir o tamanho da string

let nome = 'giovanni'

let resultado = nome.length

console.log(resultado)



// descobrir onde está determinada palavra em um trecho de strings

let nome = 'giovanni de carvalho'

let resultado = nome.indexOf('carvalho')

console.log(resultado)

ou 

let nome = 'giovanni de carvalho'

let resultado = ''

if(nome.indexOf('san') > -1){
    resultado = 'familia carvalho'
} else {
    resultado = 'sem familia'
}

console.log(resultado)



// extrair parte de uma string

let nome = 'giovanni de carvalho'

let resultado = nome.slice(0, 10) // começa do 0 até a posição 10 final

console.log(resultado)

let nome = 'giovanni de carvalho'

let resultado = nome.slice(-4) // começã do final do array

console.log(resultado)



// extrair parte de uma string

let nome = 'giovanni de carvalho'

let resultado = nome.substr(0, 10)
// inicia da posição 0, pegando os próximos 10 carcateres

console.log(resultado)




// substituição de uma parte da string por uma outra

let nome = 'giovanni de carvalho'

let resultado = nome.replace('carvalho', 'silva')

console.log(resultado)



// substituir a string com formatação para maiúsculo ou minúsculo

let nome = 'giovanni de carvalho'

let resultado = nome.toUpperCase('carvalho', 'silva') // maiúsculo
let resultado = nome.toLowerCase('carvalho', 'silva') // minúsculo 

console.log('nome: ', nome)
console.log('resultado:', resultado)



// remove espaços do inicio e do fim da string

let nome = 'Bruno Bruna Brune'

let resultado = nome.trim().length

console.log(resultado)



// verificar qual caracter está em uma determinada posição   

let nome = 'Bruno Bruna Brune'

let resultado = nome.charAt(7)

console.log(resultado)



// recorta os espaços da string e transforma ela em um array

let nome = 'Bruno Bruna Brune'

let resultado = nome.split(' ')

console.log(resultado) 


// Métodos de manipulação com numbers

// Métodos de manipulação com string

let n = 10

let resultado = n.toString()

console.log(resultado)



// ajustar o final das casas decimais de um número

let n = 10.57183768486171

let resultado = n.toFixed(2)

console.log(resultado)


// transformar em um número inteiro

let n = '10.57183768486171'

let resultado = parseInt(n) + 2

console.log(resultado)

ou 

let n = '10.57183768486171'

let resultado = parseFloat(n) + 2

console.log(resultado)



// remove espaços do inicio e do fim da string

let nome = 'Bruno Bruna Brune'

let resultado = nome.trim().length

console.log(resultado)



// verificar qual caracter está em uma determinada posição

let nome = 'Bruno Bruna Brune'

let resultado = nome.charAt(7)

console.log(resultado)



// recorta os espaços da string e transforma ela em um array 

let nome = 'Bruno Bruna Brune'

let resultado = nome.split(' ')

console.log(resultado)


// Métodos de manipulação com array

// juntar todas posições do array em uma string separada por vírgula

let lista =['ovo', 'massa', 'farinha']

let resultado = lista.toString()

console.log(resultado)



// juntar todas posições do array em uma string separada por ( um caracter que vc escolha) ex ( '-' )

let lista =['ovo', 'massa', 'farinha']

let resultado = lista.indexOf('ovo')

console.log(resultado)


let lista =['ovo', 'massa', 'farinha']

let resultado = lista.join('-')

console.log(resultado)



// retorna um item em uma determinada posição 

let lista =['ovo', 'massa', 'farinha']

let resultado = lista.indexOf('ovo')

console.log(resultado)



// lista que remove índices do vetor

let lista =['ovo', 'massa', 'farinha']

lista.pop() // remove o último
lista.shift() // remove o primeiro

let resultado = lista

console.log(resultado)



// adicionar um novo index no array 

let lista =['ovo', 'massa', 'farinha']

lista.pop() // remove o último
lista.shift() // remove o primeiro

let resultado = lista

console.log(resultado)



// remover um index do array

let lista =['ovo', 'massa', 'farinha']

lista.splice(1, 1) // 1º posição do index, 2º quantos quer remover

let resultado = lista

console.log(resultado)



// concatenar 2 arrays

let lista =['ovo', 'massa', 'farinha']
let lista2 = ['forno', 'microondas']

let resultado = lista.concat(lista2)

console.log(resultado)


// ordenar de forma alfabética

let lista =['ovo', 'massa', 'farinha']
let lista2 = ['forno', 'microondas']

lista.sort() // alfabética
lista.reverse() // invertendo para descrescente

let resultado = lista

console.log(resultado)


// MAP - função que mapeia o array e percorre ele item a item e executa uma nova função gerando um novo array

let lista = [20, 10, 30]
let lista2 = []

lista2 = lista.map(function(item) {
    return item * 2
})

let resu = lista2
console.log(resu)


//

let lista =['ovo', 'massa', 'farinha']

let resultado = lista.toString()

console.log(resultado)


let senha = [145236]

let novaSenha = []

novaSenha = senha.map(function(item) {
    let trocar = prompt('nova senha')
    return item  = trocar
})

let res = novaSenha
console.log(res)



// FILTER - realiza um filtro no array

let lista = [20, 10, 30]
let lista2 = []

lista2 = lista.filter(function(item){
    return item > 15

    // if(item > 3) {
    //     return true
    // } else {
    //     return false
    // }
})

let resu = lista2
console.log(resu)


// EVERY - comparação com todos os itens do array / apenas se todos forem a mesma condição

let lista = [20, 10, 30]
let lista2 = []

lista2 = lista.every(function(item){

    if(item > 3) {
        return true
    } else {
        return false
    }

		// return(item > 15) ? true : false
})

let resu = lista2
console.log(resu)



// SOME - comparação com todos os itens do array / apenas alguns terem a condição

let lista = [20, 10, 30]
let lista2 = []

lista2 = lista.some(function(item){

     if(item > 15) {
         return true
     } else {
        return false
    }

//     return(item > 15) ? true : false
})

let resu = lista2
console.log(resu)



// FIND - buscar algum item específico na lista

let lista = [
    {
        id: 1,
        nome: 'bruna',
        telefone: '11966656665'
    },
    {
        id: 2,
        nome: 'maria',
        telefone: '11988898889'
    },
    {
        id: 3,
        nome: 'pedro',
        telefone: '119777877778'
    }
]

let lista2 = []



lista2 = lista.find(function(item){
    return(item.id == 1)? true : false
})

let resu = lista2
console.log(resu)


// FINDINDEX - buscar algum item específico na lista por index

let lista = [
    {
        id: 1,
        nome: 'bruna',
        telefone: '11966656665'
    },
    {
        id: 2,
        nome: 'maria',
        telefone: '11988898889'
    },
    {
        id: 3,
        nome: 'pedro',
        telefone: '119777877778'
    }
]

let lista2 = []



lista2 = lista.findIndex(function(item){
    return(item.id == 1)? true : false
})

let resu = lista2
console.log(resu)


let lista = [
    {
        id: 1,
        nome: 'bruna',
        telefone: '11966656665'
    },
    {
        id: 2,
        nome: 'maria',
        telefone: '11988898889'
    },
    {
        id: 3,
        nome: 'pedro',
        telefone: '119777877778'
    }
]

let lista2 = []



lista2 = lista.findIndex(function(item){
    return(item.id == 3)? true : false
})

let resu = lista2
console.log(resu)
