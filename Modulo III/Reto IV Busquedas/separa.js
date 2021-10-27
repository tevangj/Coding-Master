// 1 - Definir el arreglo
// 2 - Creo la funcion
// 3 - Crear otro dos arreglos para guardar numero y letras
// 4 - Crear funcion
// 5 - Crear arreglos para depositar valores
// 6 - Hacer el for para recorrar todo el arrelgo
// 6 - Hacer un if que indique si el string me guarde el valor en arrelgo letras, sino guardar el valor en numeros
// 7 - imprimir


let lista = [8,"e",7,2,"a","d","f",2,3,1,4,3];

separar(lista);

function separar(arreglo){
let letras = [];
let numeros = [];
 for(let i = 0; i<arreglo.length; i++){
     if(typeof arreglo[i] === 'string'){
        letras.push(arreglo[i]);
    } else {
        numeros.push(arreglo[i]);
    }
  }
  console.log(letras);
  console.log(numeros);
}