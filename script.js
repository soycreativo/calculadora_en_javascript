function calcularOperacion(){
    //Sacar los valores de los input
let numero1 = parseInt(document.querySelector(".valor1").value)
let numero2 = parseInt(document.querySelector(".valor2").value)

let suma = numero1 + numero2
respuestaSuma(suma)

}

let respuestaSuma = function(resultado){
    let espacioRespuesta = document.querySelector(".resultado")
    espacioRespuesta.innerText = `La respuesta es: ${resultado}`
    
}




function calcularOperacion2(){
    
let numero3 = parseInt(document.querySelector(".valor3").value)
let numero4 = parseInt(document.querySelector(".valor4").value)


let resta = numero3 - numero4
respuestaResta(resta)

}

let respuestaResta = function(resultado){
    let espacioRespuesta = document.querySelector(".resultado")
    espacioRespuesta.innerText = `La respuesta es: ${resultado}`
}


function calcularOperacion3(){
    
    let numero5 = parseInt(document.querySelector(".valor5").value)
    let numero6 = parseInt(document.querySelector(".valor6").value)
    
    let multiplicacion = numero5 * numero6
    respuestaMultiplicacion(multiplicacion)
    
    }
    
    let respuestaMultiplicacion = function(resultado){
        let espacioRespuesta = document.querySelector(".resultado")
        espacioRespuesta.innerText = `La respuesta es: ${resultado}`
    }


function calcularOperacion4(){
    
        let numero7 = parseInt(document.querySelector(".valor7").value)
        let numero8 = parseInt(document.querySelector(".valor8").value)
        
        let division = numero7 / numero8
        respuestaResta(division)
        
        }
        
        let respuestaDivision = function(resultado){
            let espacioRespuesta = document.querySelector(".resultado")
            espacioRespuesta.innerText = `La respuesta es: ${resultado}`
        }