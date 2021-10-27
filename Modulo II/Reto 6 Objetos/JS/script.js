
let nombredeusuario = {
        nombre: "Esteban",
        edad: "38",
        comida: "Mexicana",
        pelicula:"Wasabi",
        musica: "Rock",
        grupo: "Metallica",
        ciudad: "Berlin",
        lomejor: "Sol",
        lopeor: "Frio",
        perro: "La chata"
};

imprimirInformacion(nombredeusuario);

function imprimirInformacion(usuario){
    document.write("Nombre: " + usuario.nombre + "<br>");
    document.write("Edad: " + usuario.edad + "<br>");
    document.write("Comida: " + usuario.comida + "<br>");
    document.write("Pelicula " + usuario.pelicula + "<br>");    
    document.write("Musica: " + usuario.musica + "<br>");
    document.write("Grupo: " + usuario.grupo + "<br>");
    document.write("Ciudad: " + usuario.ciudad + "<br>");
    document.write("Lo mejor: " + usuario.lomejor + "<br>");
    document.write("Lo peor: " + usuario.lopeor + "<br>");
    document.write("Mascota: " + usuario.perro + "<br>");
    document.write("<br>");
}

cambiarinformacion();

function cambiarinformacion(){ 
let salir = true;    
do{
let cambio = prompt("Quiere cambiar el nombre de usuario");
        if (cambio =="Si"){
           alert("Puede cambiar lo siguiente: Nombre, Edad, Comida, Pelicula, Musica Grupo, Ciudad, Lo mejor , Lo peor, Perro ");
           let propiedad_nueva = prompt("Que propidad quiere cambiar");
            
                if (propiedad_nueva == "Nombre"){
                    cambio_propiedad = prompt("Escriba el nuevo nombre");
                    nombredeusuario.nombre = cambio_propiedad;
                    

                } else if (propiedad_nueva == "Edad"){
                    cambio_propiedad = prompt("Escriba el nueva edad");
                    nombredeusuario.edad = cambio_propiedad;
                   

                } else if (propiedad_nueva == "Comida"){
                    cambio_propiedad = prompt("Escriba su comida favorita");
                    nombredeusuario.comida = cambio_propiedad;
                    
                }
                else if (propiedad_nueva == "Pelicula"){
                    cambio_propiedad = prompt("Escriba su pelicual favorita");
                    nombredeusuario.pelicula = cambio_propiedad;
                   

                }else if (propiedad_nueva == "Musica"){
                    cambio_propiedad = prompt("Que musica te gusta");
                    nombredeusuario.musica = cambio_propiedad;
                    

                }else if (propiedad_nueva == "Grupo"){
                    cambio_propiedad = prompt("Cual tu grupo grupo favorito");
                    nombredeusuario.grupo = cambio_propiedad;
                   

                }else if (propiedad_nueva == "Ciudad"){
                    cambio_propiedad = prompt("Cual es tu ciudad favorita");
                    nombredeusuario.ciudad = cambio_propiedad;
                    
                    
                }else if (propiedad_nueva == "Lo mejor"){
                    cambio_propiedad = prompt("En una palabra, que es lo mejor para ti");
                    nombredeusuario.lomejor = cambio_propiedad;
                   

                }else if (propiedad_nueva == "Lo peor"){
                    cambio_propiedad = prompt("En una palabra, que es lo peor para ti");
                    nombredeusuario.lopeor = cambio_propiedad;
                    

                }else if (propiedad_nueva == "Perro"){
                    cambio_propiedad = prompt("Cual nombre te gusta para tu perro");
                    nombredeusuario.perro = cambio_propiedad; 
                }
                
                cambio = prompt("Quiere cambiar el nombre de usuario");
                return imprimirInformacion(nombredeusuario);

        }else if (cambio == "No"){
            return alert("Buenas tardes muchas gracias");
            salir = false;

        }else if (cambio !="Si" || cambio !="No"){
            alert("Respuesta no valida");
            cambio = prompt("Por favor escriba Si o No");
        }
    } while (!salir)
 }
 

