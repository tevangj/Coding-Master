/*
//while
var dias_semana = prompt("Por favor escribe una día de la semana, con minusculas");
    while (!(dias_semana == "domingo" || " ")){
        if (dias_semana == "lunes"){
            alert ("Un cafe muy cargado porque es lunes");
        }
        else if (dias_semana == "martes"){ 
            alert ("Un día menos, más cafe para el aguante");
        }
        else if (dias_semana == "miercoles"){ 
            alert ("Ya casi, la mitad y es viernes. Animo !!!");
        }
        else if (dias_semana == "jueves"){ 
            alert ("Ya es Juebebes!!!");
        }
        else if (dias_semana == "viernes"){ 
            alert ("Viernes, vamonos con la banda");
        }
        else if (dias_semana == "sabado"){ 
            alert ("Si no llueve, un carnita asada");
        }
     dias_semana = prompt("Por favor escribe una día de la semana");
    }

 alert("Solo para recordate que eb 24H es lunes");
*/

 //Do while
let bandera = false;
 do{
    let dato = prompt("Ingrese el numero");
     if(isNaN(dato)){
         alert("El dato no es un numero");
         if(dato == "Salir" || "Terminar"){
             bandera = true;
         }
         
     }else{
         alert(dato);
     }

} while (!bandera)




//for
for (var index = 0 ; index <=50 ; index++){
    if( index % 2 != 0){
    index = index;
    console.log(index + " es impar");
    }
}



