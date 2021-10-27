let edad = 0;
let muncipio = "";
let muncipio_permitido = "Reynosa";
let muncipio_no_permitido = "Morelia";
let esta_embarazada = false;
let semanas_gestacion = 0;

edad = prompt("Cual es tu edad?");

if(edad >= 18 && edad < 30){
    muncipio = prompt("Donde vives?");
    esta_embarazada = prompt("Estas embarazada?");
    if(muncipio == muncipio_permitido){
        if(esta_embarazada == "si"){
            semanas_gestacion = prompt("Cuanto tiempo tienes de gestacion?");
            if(semanas_gestacion > 9){
                alert("Estas en el grupo etario!");
            }
            else{
                alert("No estas en el grupo etario!");
            }
        }
        else{
            alert("Estas en el grupo etario!");
        }
    }
    else if(muncipio == muncipio_no_permitido){
        alert("No estas en el grupo etario!");
    }
    else{
        alert("No estas en el grupo etario!");
    }
}
else if(edad >= 30){
    alert("Estas en el grupo etario!");
}
else{
    alert("No estas en el grupo etario!");
}