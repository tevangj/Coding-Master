let numeros = [1,4,19,12,31,32,40,43,65,67];

const ordenamientoBurbuja = (arreglo) =>{
    let length = arreglo.length;
    for(let index = 0 ; uno < length; index++){
        //console.log("ciclo 1 " + uno);
            for(let dos= 0 ; dos < length - 1 - uno; dos++){
                //let posicionActual = length -1 - uno;
                //console.log("ciclo 2 " + posicionActual);
                if(arreglo[dos] > arreglo[dos + 1]){
                    [arreglo[dos], arreglo[dos +1]] = [arreglo[dos + 1], arreglo[dos]]
            }
        }        
    }

    return arreglo
}

let arregloOrdenado = ordenamientoBurbuja();