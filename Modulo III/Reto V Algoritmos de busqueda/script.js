let numeros = [9,3,1,6,5,88,-1,2,7] ;
let letras = ["b","h","w","e","a"];
let ascii =  [98,104,119,101,97]

const ordenamientoDecendente = (arreglo) =>{
    let length = arreglo.length;
    for(let uno = 0 ; uno < length; uno++){
        //console.log("ciclo 1 " + uno);
            for(let dos= 0 ; dos < length - 1 - uno; dos++){
                //let posicionActual = length -1 - uno;
                //console.log("ciclo 2 " + posicionActual);
                if(arreglo[dos] < arreglo[dos + 1]){
                    [arreglo[dos + 1], arreglo[dos]] =  [arreglo[dos], arreglo[dos +1]]
            }
        }        
    }

    return arreglo
}

const ordenLetras = (arreglo) =>{
    let length = arreglo.length;
    for(let uno = 0 ; uno < length; uno++){
    //console.log("ciclo 1 " + uno);
        for(let dos= 0 ; dos < length - 1 - uno; dos++){
            //let posicionActual = length -1 - uno;
            //console.log("ciclo 2 " + posicionActual);
            if(arreglo[dos].charCodeAt(0) > arreglo[dos + 1].charCodeAt(0)){
                [arreglo[dos], arreglo[dos +1]] =  [arreglo[dos + 1], arreglo[dos]];

        }
    }        
}

return arreglo

}

let arregloOrdenado = ordenamientoDecendente(numeros);
let ordenaLetras = ordenLetras(letras);
//let letrasOrden = letras.sort();
console.log(arregloOrdenado);
console.log(ordenaLetras);

