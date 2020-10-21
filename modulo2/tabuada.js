

function calcular() {

    let valor = Number(document.getElementById('valorPrimario').value)

    let texto = '';
    for (let contador = 0; contador <= 10; contador ++ ) {
        texto +=   contador + ' x  = ' + (contador * valor) + '</p>'

        
    document.getElementById('digitado').innerHTML =  `${texto}` 
    
    }

    

}