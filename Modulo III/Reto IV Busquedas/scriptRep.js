let lista = [6,3,1,8,2,3,6,3,2,5,6].sort();

buscarRepetido(lista);

function buscarRepetido(arreglo){

 let arregloUnico = [];
 let arregloContador = [];
 let contador = 1;

    for(let i = 0; i <arreglo.length;i++){
            if(arreglo[i+1] === arreglo[i]){
                contador++;
            } else {
                arregloUnico.push(arreglo[i]);
                arregloContador.push(contador);
                contador = 1;
            }
    }
   
    for(let j = 0; j<arregloUnico.length;j++){
        console.log("El valor  " + arregloUnico[j] + " esta  " + arregloContador[j] + " repetido" )

    }
    

let maximo = Math.max(...arregloContador);
let posicionNumero = arregloContador.indexOf(maximo);
console.log("El número " + arregloUnico[posicionNumero] + " es el que más se repite");
console.log(arregloUnico);
console.log(arregloContador);
console.log(maximo);
}