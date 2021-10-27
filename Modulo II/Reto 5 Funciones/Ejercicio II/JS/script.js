var dato = prompt("Favor de ingresar un dato");

function validarDato(dato){
   return (typeof dato);
}

alert("El tipo de dato es " + validarDato(dato));
