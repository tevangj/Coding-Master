
var lista_numeros = [];
let bandera = false;

do{
   let dato = prompt("Ingrese el numero");
    if(isNaN(dato)){
        alert("El dato no es un numero");
        if(dato == "Salir" || "Terminar"){
            bandera = true;
        }
        
    }else{
        
        var numeros = prompt("Ingrese el numero");
        lista_numeros.push(numeros);
        
    }

} while (!bandera)

console.log(sumarArrego(lista_numeros));

function sumarArrego(arreglo){
    let suma = 0;
    for (let index = 0; index < arreglo.length; index++) {
        suma += arreglo[index];
    }
    return suma;
}

