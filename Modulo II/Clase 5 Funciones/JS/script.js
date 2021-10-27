/*
function ObtenerMarcador(partido1, partido2){
    if(isNan(partido1) == false &&  isNaN(partido2) == false){
        var total = partido1 + partido2; //Let solo es variable a nivel local
    } else {
        alert("Ingresa unicamente numeros!");
    }
    return total;
}

var resultado = ObtenerMarcador(3,4);
var resultado2 = ObtenerMarcador(5,6);
console.log(resultado)
console.log(ObtenerMarcador(2,3));
*/

//funciones anidadas
function agregarCuadrado(a,b){
    function cuadrado(x){
        return x * x;
    }
    return  cuadrado(a) + cuadrado(b);
}

console.log(agregarCuadrado(3,4));
console.log(agregarCuadrado(20,20));
console.log(agregarCuadrado(5,6));
