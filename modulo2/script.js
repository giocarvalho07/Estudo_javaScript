var nomeTitulo = document.getElementById("titulo")

nomeTitulo.innerHTML = "show molecote"

var bacon = document.getElementById('bacon')

bacon.innerHTML = "churraso"

var input = document.getElementById('campo')
input.value = "delicia"

function alterar(oi) {
    var titulo = document.getElementById('titulo')
    titulo.innerHTML = oi;

    var input = document.getElementById('campo')
    input.value = "trocar o valor do input";
}

function somar(x, y) {
    let total = x + y;
    return total;
}

var resultado = somar(10, 7);
console.log(resultado)


function clicou() {
    document.getElementById('titulo').innerHTML = "obrigado "
}


function digitou(evento) {
    
    if(evento.keyCode == 13){
        let texto = document.getElementById('campo').value
        console.log(texto)
    }

}

function limpar() {
    document.getElementById('titulo')
    .classList.remove('azul')
    document.getElementById('titulo')
    .classList.remove('vermelho')
    document.getElementById('titulo')
    .classList.remove('verde')
}


function azul() {
    limpar()
    document.getElementById('titulo')
    .classList.add('azul')
}

function vermelho() {
    limpar()
    document.getElementById('titulo')
    .classList.add('vermelho')
}

function verde() {
    limpar()
    document.getElementById('titulo')
    .classList.add('verde')
}


function normalMode() {
    document.getElementById('body')
    .classList.remove('darkMode')
}


function darkMode() {
    normalMode()
    document.getElementById('body')
    .classList.add('darkMode')
}



function mostrarTelefone(elemento) {
    elemento.style.display = 'none'
    document.getElementById('telefone')
    .style.display = 'block'
}

let carros = [ 'uno', 'palio','ferrari']
console.log(carros)
console.log(carros[2])

let ingredientes = [
    ['uva', 'banana'],
    ['feijão', 'arroz']
]
console.log(ingredientes[1][1])

let carro = {
    nome: 'fiat',
    modelo: 'uno',
    preco: 50,
    ligado: false,
    ligar: function(){
        this.ligado = true
        console.log('carro ligado ' + this.modelo)
    },

    acelerar: function() {
        if(this.ligado == true){
            console.log(this.modelo + ' acelerando')
        }
        else{
            console.log(this.modelo + 
                ' o carro não está ligado')
        }
    }
}

console.log(carro.nome)

carro.ligar()
carro.acelerar()


let automovel = [

    {
        nome: 'fiat',
        modelo: 'uno'
    },

    {
        nome: 'fiat',
        modelo: 'palio'
    },

    {
        nome: 'fiat',
        modelo: 'Mobi'
    }

]

console.log(automovel[0].modelo)

function removerMenu() {
    document.getElementById('header')
    .classList.remove('menuAzul')

    document.getElementById('header')
    .classList.remove('menuCinza')
}

function modoDark() {
    removerMenu()
    document.getElementById('body')
    .classList.add('menuEscuro')

    document.getElementById('header')
    .classList.add('menuCinza')
}

function modoWhite() {
    removerMenu()
    document.getElementById('body')
    .classList.remove('menuEscuro')

    document.getElementById('header')
    .classList.add('menuAzul')
}


document.querySelector('ol.lista');
document.querySelector('#titulos')
    .innerHTML = 'fala receitas';
    // apenas elementos 

document.querySelectorAll('li');

let listaLi = document.querySelectorAll('li');
// Array de elementos


for(let i in listaLi) {
    listaLi[i].style.color = 'red';
    }
