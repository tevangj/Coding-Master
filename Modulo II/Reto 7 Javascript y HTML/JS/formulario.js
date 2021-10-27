function boton_agregar(){

let lista = document.getElementById("lista");
let lista_completa = []; 
lista_producto = [];


for(i = 0 ; i < 5; i++){

    let nombre_producto= document.getElementById("ingresa_prodcuto").value;
    lista_completa.push(nombre_producto.value);
    lista_completa[i]= "<li>" + nombre_producto + "</li>";

   }

   lista.innerHTML = lista_completa;
}
