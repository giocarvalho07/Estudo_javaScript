

function menuToggle() {

    let menuArea = document.getElementById("menu-area")

    if(menuArea.classList.contains('menu-aberto') == true){
        menuArea.classList.remove('menu-aberto')
    } else{
        menuArea.classList.add('menu-aberto')
    }

}

let dia = 1
let diaNome = ""

switch(dia) {
    case 1: 
        diaNome = 'segunda-feira';
        break;
    case 2:
        diaNome = 'terca-feira';
        break;
    case 3:
        diaNome = 'quarta-feira';
    break;
    case 4:
        diaNome = 'quinta-feira';
    break;
    case 5:
        diaNome = 'sexta-feira';
    break;
    default: 
        diaNome = 'final de semana';
        break;
}

// let entrada = (prompt('Diga para gente o seu nome'))

document.getElementById('dia').innerHTML = ` hoje é ${diaNome}` 

// for loop
// for array

let texto = '';

for(let contador = 0; contador < 10; contador++) {
    texto = contador + '<br>'
}

document.getElementById('demoFor').innerHTML = `
Se liga no for ${texto}`


let carros = ['ferrari', 'fusca', 'palio', 'chevette', 'scort', 'merecedez', 'uno'];

let lista = '<ul>'

for(let contadora in carros) {
    lista += '<li>' + carros[contadora] + '</li>';
}

lista += '</ul>'

document.getElementById('demoArray').innerHTML = lista



let descricao = ''

let contador = 1

while( contador <= 10) {
    descricao += "Número " + contador + '<br>'
    contador++ 
}

document.getElementById('demoWhile').innerHTML = descricao;

