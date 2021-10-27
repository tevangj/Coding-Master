
//Ejercicio I Pregunta bellisimo
let pregunta = prompt("Eres bellisimo/a");
if (pregunta =="si"){
    alert("Ciertamente");
}
else{
    alert ("No te creo");
}


//Ejercicio II  Numero par
let numero_par = parseInt(prompt("Introducce numero"));
if (numero_par % 2 == 0 ){
    alert("Es numero par");
}
else{
    alert ("No es par");
}

//Ejercicio III Numero de premio
let numero_premio = parseInt(prompt("Por favor, introdusca su numero de cliente"));
if ( numero_premio == 1000){
    alert("Ganaste!")
}
else{
    alert ("Lastima margarito");
}

//Ejercicio IV Comparacion de numeros
let primer_numero = parseInt(prompt("Dame un numero"));
let segundo_numero = parseInt(prompt("Dame otro numero"));
if ( primer_numero > segundo_numero){
    alert("El primer numero es mayor")
}
else{
    alert ("Segundo numero es mayor");
}

//Ejercicio V Dias
let dia_semana = prompt("Mensaje del día");
if (dia_semana == "lunes"){
    alert("Noooooo! otra vez no!!");
}
else if(dia_semana == "viernes"){
    alert("Por fin!!!!")
}
else if(dia_semana == "sabado" ){
    alert("Una canita asada")
}
else if(dia_semana == "domingo" ){
    alert("Casi lunes, noooo!!!")
}
else {
    alert("Que ya sea viernes")
}


//Ejercicio VI
let calificacion = parseInt(prompt("Dame tu calificación entre uno y diez"));
if ((calificacion > 0) && (calificacion <= 10)){
    if (calificacion < 6 ){
        alert("REPROBADO, BUROOO!!!");
    }
    else if ((calificacion) >= 6 && (calificacion < 8)){
        alert("Regular");
    }
    else if ((calificacion) >= 8 && (calificacion < 9)) {
        alert("Bien");
    }
    else if ((calificacion) >= 9 && (calificacion < 10)) {
        alert("Excelente");
    }
    else if (calificacion == 10 ){
        alert("Nerd");
    }
}

else{
    alert("Numero no valio ")
}


//Ejercicio VII Compra de helados
let helado = 50
let oreo = 10
let kitkat = 15
let brownie = 20

let pregunta = prompt("Desea una helado?")
if (pregunta == "si"){
    let pregunta_topping = prompt("Quiero un topping adicional?");
        if (pregunta_topping == "si"){
            let tipo_topping = prompt("Que topping quiere, tenemos oreo, kitkat o brownie");
                if (tipo_topping == "oreo"){
                    total_oreo = helado + oreo;
                    alert("Serian " + total_oreo + " por favor");
                }
                else if (tipo_topping == "kitkat"){
                    total_kitkat = helado + kitkat;
                    alert("Serian " + total_kitkat + " por favor");
                }
                else if (tipo_topping == "brownie"){
                    total_brownie = helado + brownie;
                    alert("Serian " + total_brownie + " por favor");
                }
                else{
                    alert("No tenemos ese topping, serian " + helado + " pesos por favor");
                }

        }
        else{
            alert("Serian " + helado + " pesos por favor")
        }
}
else{
    alert("Muchas gracias por su visita")
}

