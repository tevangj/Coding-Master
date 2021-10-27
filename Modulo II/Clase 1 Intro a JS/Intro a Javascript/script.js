// Ejercicio I - nombre de usuario
let nombre = prompt("Ingrese su nombre");

//Ejercicio II - edad de usuario
let edad = parseInt(prompt("Cual es su edad"));

//Ejercicio III - Mostrar nombre de usuario en alert
alert("Mi nombre es: " + nombre)

//Ejercicio IV - Imprimir edad del usuario
console.log(edad)

//Ejercicio V - Suma 10 a la edad
edad = edad + 10;

//Ejercicio VI - Imprimir con documento write
document.write(edad);

//Ejercicio VII - Imprimir si es mayor o menor de edad
if (edad < 18) {
console.log("Eres menor de edad");
} else {
console.log("Eres mayor de edad, pasele!!");
}