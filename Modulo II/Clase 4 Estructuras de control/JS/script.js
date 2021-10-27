/*
//Imprmir los numeros del 0 al 10
var index = 0 ;
while ( index < 11 ){
    console.log( index );
    index++;
}

// Guarda un arreglo de valores introducidos
//Si el usuario no introduce un valor, termina el ciclo y valida que el campo no este vacio

let arreglo = [];
var userInput;
while(!(userInput=="")){
    userInput = prompt("Ungrese cualquier carácter");
    if(userInput == ""){
        //hacer hacer nada
    } else {

    arreglo.push(userInput);
    }
}
console.log("Introduciste estos valores: " + arreglo);

//Conteo de numero del 1 al 10, mandar a imprimir en consola
var contador = 0;
do{
    contador++;
    console.log("Conteo: " + contador);
    }    while(contador < 10)
*/
//Del 1 al 10, Cuantos numeros son multiplos de 2?
var contador = 0 ;
for(var index = 1; index <=100; index++){
     if(index % 2 == 0 ){
        contador = contador + 1;
        console.log(index + " es multiple de 2");
    }
}