//concat
let nombre = "";
let apellido = "";
let nombre_completo ="";
nombre = prompt("Ingrese su nombre!");
apellido = prompt("Ingrese su apellido");
nombre_completo = nombre.concat(" ").concat(apellido);
document.write(nombre_completo);

//concat arreglos
let frutas = ["Mandarina", "Manzana", "Pera"]
let verduras = ["Papa", "Ayote", "Zanahoria"]
let frutasYverduras = frutas.concat(verduras);

//reverse
let marcas_automovil = ["Honda", "Toyota", "Nissan"];
marcas_automovil.reverse();

//sort
let marcas_automovil = ["Honda", "Toyota", "Nissan"];
marcas_automovil.sort(function(a,b){return a-b});

//slice
let marcas_automovil = ["Honda,Toyota"];
marcas_automovil.splice(1,0, "Nissan");

//slice
let marcas_automovil = ["Honda,Toyota,Nissan"];
let arreglo_nuevo = [];
arreglo_nuevo = marcas_automovil.slice(1);
document.write("items registrados: " + marcas_automovil.lenght + "<br />");
document.write(marcas_automovil);

//split
let marcas_automovil = "Honda,Toyota,Nissan";
marcas_automovil = marcas_automovil.split(",");
document.write("items registrados: " + marcas_automovil.lenght + "<br />");
document.write(marcas_automovil);

//push
let dato_nuevo = prompt("Que marca quieres agregar?");
marcas_automovil.push(dato_nuevo);
document.write("Items registrados: " + marcas_automovil + "<br />");
document.write(marcas_automovil);

let marcas_automovil = ["Honda", "Toyota", "Nissan"];
document.write("items registrados: " + marcas_automovil.lenght + "<br />");
marcas_automovil [0] = "BMW";
