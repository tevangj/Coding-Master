var color = prompt("Escoje verde, amarillo o rojo?")

function cambiarColor(a){
    
    if (a == "verde" ){
             alert("De verde pasa a amarillo");
    }else if (a == "amarillo") {
             alert("De amarillo puede pasar a rojo");
    }else if (a == "rojo") {
             alert("De rojo pasa a verde");   
    }

    return a;
}

cambiarColor(color);