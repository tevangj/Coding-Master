let lista_de_alumnos = [] //Creo el arreglo para guardar la información de los alumnos como objetos.


let agregarAlumnos = () => { //necesito una funcion para agregar los nombres (function arrows)
        let alumno_objeto = {};  //Se creo el objeto alumno, donde se guardan las propiedades de cada alumno.
        let bandera = false;
        let carnet = document.getElementById("carnet").value; 
        lista_de_alumnos.forEach((objeto)=> { //Funcion para leer todo el arreglo y identificar valor de carnet
            if( carnet === objeto.carnet){ //Se va a comprar si el arrelgo alumno.objeto es el verificadorCarnet
                bandera = true; //Mensaje si esta registrado
            }
        });            

        if(bandera == true){
            alert("El alumno ya esta registrado")
        } else{
        let alumno = document.getElementById("alumno").value; 
        let materia = document.getElementById("materia").value; 
        let notasPeriodos = {
            notaP1: parseFloat(document.getElementById("notaP1").value),
            notaP2: parseFloat(document.getElementById("notaP2").value),
            notaP3: parseFloat(document.getElementById("notaP3").value),
            notaP4: parseFloat(document.getElementById("notaP4").value)
        };

        alumno_objeto.carnet = carnet; //El valor se guarda en el objeto alumno_objeto con la propiedad carnet.
        alumno_objeto.alumno = alumno; 
        alumno_objeto.materia = materia; 
            notasPeriodos.notaP1 = notasPeriodos.notaP1; // Se guardan las notas de los periodos en el objeto notas
            notasPeriodos.notaP2 = notasPeriodos.notaP2;
            notasPeriodos.notaP3 = notasPeriodos.notaP3;
            notasPeriodos.notaP4 = notasPeriodos.notaP4;
        alumno_objeto.notasPeriodos = notasPeriodos; //Se guarda como propiedad la informacion del objeto notasPeriodo en alumno_objeto
        alumno_objeto.notasPromedio = ((notasPeriodos.notaP1 + notasPeriodos.notaP2 + notasPeriodos.notaP3 + notasPeriodos.notaP4) / 4); // Se crea otra propiedad con el calculo del promedio

        lista_de_alumnos.push(alumno_objeto); //Se usa push para ir guardando objeto por objeto.

        document.getElementById("carnet").value = ""; //Se borra el valores de la cajas una vez que hacermos click en el boton.
        document.getElementById("alumno").value = ""
        document.getElementById("materia").value = "";
        document.getElementById("notaP1").value = "";
        document.getElementById("notaP2").value = "";
        document.getElementById("notaP3").value = "";
        document.getElementById("notaP4").value = "";
        
        //El resultado son objetos guardados en el areglo lista de alumnos, con la lista limpia
        console.log(notasPeriodos);
        return lista_de_alumnos;
    }
}


//La siguiente funcion debe mostrar la lista en forma de lista no ordenada
let mostrarLista = () => { // Funcion para mostrar lista
    var html="";
    lista_de_alumnos.forEach((informacion, index) => { //for each donde usa lista de alumnos y recorre todo uno por uno
        let informacion_alumnos = informacion;
        
        html += "<ul>";
            html += "   <li class='list-group-item'>" + "Nombre del alumno: " + informacion_alumnos.alumno + "</li>";
            html += "   <li class='list-group-item'>" + "Carnet del Alumno: " + informacion_alumnos.carnet + "</li>";
            html += "   <li class='list-group-item'>" + "Notas promedio: " + informacion_alumnos.notasPromedio + "</li>";
        html += "</ul>"
    });
    console.log(html);
    document.getElementById("registros").innerHTML =  html;
    }

/*
(La idea de esta funcion, es que este ligada directamente cuando ingreso el valor del carnet desde el principio

function verificarCarnet (){
  let carnet = document.getElementById("carnet").value; //Pido valor de carnet
      let verificadorCarnet = carnet; //Guardo valor de carnet
      let verificarDB = lista_de_alumnos.forEach((objeto)=> { //Funcion para leer todo el arreglo y identificar valor de carnet
            if( verificadorCarnet === objeto.carnet){ //Se va a comprar si el arrelgo alumno.objeto es el verificadorCarnet
                alert("El alumno ya esta registrado"); //Mensaje si esta registrado
            } else
                return verificadorCarnet; //Me regresa el valor que ingrese 

        });            

}    

*/