let basedeDatos_usuario = []; //Aqui es donde se van a guardar los usuario

//FUNCION CREAR EL USUARIO

let crearUsuario = () => { // Esta funcion es solo para crear el usuario y guardarlo en el arreglo (basedeDatos_usuarios)
  let banderaNombre = true; // Esta variable es el switch que se cumpla la condicion del nombre
  let banderaMonto = true; // Esta variable es el switch que se cumpla la condicion del monto
  let nombre = document.getElementById("crearNombredeUsuario").value; // Obtengo la infomarción del un campo de texto

  basedeDatos_usuario.forEach((objeto) => { //Es necesario un ciclo para recorrer el ciclo 
    if (nombre === objeto.nombre || nombre === "") { // 
      banderaNombre = false; // En caso de no cumplir con la condicion la bandera cambia a falso.
    }
  });

  if (banderaNombre === false) { //Aqui utilizo el valor de la bandera para saber si es falso.
    alert("Ese usuario ya existe o el campo esta vacio"); // Si es falso me lanza el alerta y no registra nada
  } else {

    let clave = document.getElementById("crearClavedeUsuario").value;//L alcave no tiene restriciones
    let monto = parseFloat(document.getElementById("primerDeposito").value); //" "
    
    if (monto < 10 || monto > 990) { // Es funcion es para validar las cantidad del deposito.
      banderaMonto = false; // En caso de no cumplir con la condicion la bandera cambia a falso.

    } if (banderaMonto === false) { //Aqui utilizo el valor de la bandera para saber si es falso.
      alert("Deposito minímo son 10 pesos, maximo 990 pesos"); // Si es falso me lanza el alerta y no registra nada
    } else {

      let usuario = new Usuario(nombre, clave, monto);// En caso de no tener problema se, guarda la informacion en una nueva instancia de la clase usuario, con sus constructores.
   
      basedeDatos_usuario.push(usuario); //Crea una nueva posicion en el arreglo para la instancia del usuario creado.

      document.getElementById("crearNombredeUsuario").value = ""; //Limpia al final los campos donde ingresamos la clave
      document.getElementById("crearClavedeUsuario").value = "";
      document.getElementById("primerDeposito").value = "";

    }
  }
}
console.log(basedeDatos_usuario);


//FUNCION CONSULTAR SALDO

function consultarSaldo() { //recibe como parametro mi arreglo de usuarios.
  let bandera = false; //Bandera en falso, solo cambia si el valor es verdadero
  let position = -1; //Se asigno una variable para guradr la posicion del arrelgo.
  let nombre = document.getElementById("ingresarNombredeUsuario").value; // Obtengo la infomarción del un campo de texto
  let clave = document.getElementById("ingresarClavedeUsuario").value;// Se teclea la clave
  let monto = 0; //Creo una varible monto aqui para poder usarla mas adelante en otras partes de la funcion

  for (let index = 0; index < basedeDatos_usuario.length; index++) { // ciclo para revisar la informacion en todo el arreglo
    let objeto = basedeDatos_usuario[index];  //Meto el arreglo al una varianble para verificar el nombre este en la base de datos
    if (objeto.nombre == nombre && objeto.clave == clave) { // Es funcion es para validar si el nombre esta en el arreglo
      bandera = true; //Si es verdadero, me pone la bandera en verdadero
      position = index;//Esta variable es para guardar la posicion del arreglo
      monto = objeto.monto;//Tengo que guardar la cantidad en monto para que pueda usarla en otra parte de la funcion
    


    }
  }
  if (bandera == true) { // Esta operacion se realiza una vez que el for termina
    if (basedeDatos_usuario[position].nombre == nombre) {// Como es verdadero me busca la posicion que se guardo en el ciclo for
      let usuario = new Usuario(nombre, clave, monto); //Aqui creo una nueva instancia de mi usuario, donde se le especifico que se tiene que guardar
      usuario.imprimirConsultarSaldo();// Ya que tengo un instancia de usuario, este va a mi clase Usuario, busca el metodo y lo ejecuta
      console.log(basedeDatos_usuario[position]); //Me imprime el resultado en el console log.
      document.getElementById("ingresarNombredeUsuario").value = "";//Limpia los campos
      document.getElementById("ingresarClavedeUsuario").value = "";
      
    }

  } else { //si el falso y no esta el nombre me arroja el mensaje.
    alert("El usuario o clave son incorrectos");
  }
}

//FUNCION DEPOSITAR


function realizarDeposito(){
  let bandera = false; 
  let position = -1;
  let nombre = document.getElementById("nombreDeposito").value;
  let clave = document.getElementById("nombreClave").value;
  let anterior = 0; //Esta varible representara el valor antes de mi deposito, se declara aqui para que pueda usarse en toda la funcion
  let deposito = parseFloat(document.getElementById("depositarDinero").value); // Se agrega la varible deposito para capturar el valor
  if(deposito < 0 ){ //Se valida que no existan valores negativo, falto la parte de capos vacios y caracteres.
    alert("Favor de ingresar un número correto");
    } else {



  for (let index = 0; index < basedeDatos_usuario.length; index++) { 
    let objeto = basedeDatos_usuario[index];  
      if (objeto.nombre == nombre && objeto.clave == clave) { 
        bandera = true;
        position = index;
      }
    }

  if (bandera == true) {
    if (basedeDatos_usuario[position].nombre == nombre) {
         if((basedeDatos_usuario[position].monto + deposito) > 990){ //Se hace una condicion para que la cuenta no pueda tener mas de 990 pesos
           alert("Excede el limite de su cuenta, el maximo que puede depositar es:" + " " + (990 -  basedeDatos_usuario[position].monto)); // Aqui muestra el maximo a depositar
          } else {
            basedeDatos_usuario[position].monto = basedeDatos_usuario[position].monto + deposito;//Sumo el valor del deposito a mi propiedad monto en mi objeto usuario
            anterior = basedeDatos_usuario[position].monto - deposito; //Aqui uso la variable anterior para quitar el valor del deposito
            if( anterior < 0){ // Esto es para prevenir que existan valores negativos, si el deposito es mayor al monto base
              anterior = anterior * (-1);
            }

            let monto = basedeDatos_usuario[position].monto; //Creo una variable dentro de mi funcion para guardar el valor del monto con el deposito
            let usuario = new Usuario(nombre, clave, monto, anterior,deposito); //Se crea una instancia de la clase usuario donde agregamos las caracteristicas de anterior y deposito
            usuario.imprimirDeposito();
            console.log(basedeDatos_usuario[position]);
            document.getElementById("nombreDeposito").value = "";
            document.getElementById("nombreClave").value = "";
            document.getElementById("depositarDinero").value = "";
          }
    }

  } else {
    alert("El usuario o clave son incorrectos");
  }
 }
}



//FUNCION RETIRAR

function realizarRetiro(){
  let bandera = false;
  let position = -1;
  let nombre = document.getElementById("nombreRetiro").value;
  let clave = document.getElementById("claveRetiro").value;
  let anterior = 0; // Igual que arriva esta variable guardara el monto original antes del retiro
  let deposito = 0; // Se creo esta varianle ya que si no respetaba en orden de las caracteristicas de mi case de salia "undefined"
  let retiro = parseFloat(document.getElementById("retirarDinero").value); // Se agrega la captura del retiro
  if(retiro < 0 ){ 
    alert("Favor de ingresar un número correto");
  } else {

  for (let index = 0; index < basedeDatos_usuario.length; index++) {
    let objeto = basedeDatos_usuario[index];  
      if (objeto.nombre == nombre && objeto.clave == clave) { 
        bandera = true;
        position = index;
      }
    }

  if (bandera == true) {
    if (basedeDatos_usuario[position].nombre == nombre) {
         if(retiro > basedeDatos_usuario[position].monto || (basedeDatos_usuario[position].monto - retiro) < 10 ){  //Es condicion busca que el retiro nos mas al monto depositado y que tengas que dejar los 10 pesos en la cuenta
         alert("La cantidad minima en su cuenta deben ser de 10 pesos, el maximo que puede retirar:" + " " + (basedeDatos_usuario[position].monto - 10)); //Aqui muestra cuanto puedes retirar
        } else {

          basedeDatos_usuario[position].monto = basedeDatos_usuario[position].monto - retiro; //Se actualiza el propiedad monto del objeto para ver el monto final.
          anterior = basedeDatos_usuario[position].monto + retiro; //Se usa la varible anterior para tener el monto original antes del retiro
          let monto = basedeDatos_usuario[position].monto; 
          let usuario = new Usuario(nombre, clave, monto, anterior,deposito,retiro); // Se crea una nueva instancia de usuario, sigue el mismo orden y varibles como esta en mi clase
          usuario.imprimirRetiro();
          console.log(basedeDatos_usuario[position]);
          document.getElementById("nombreRetiro").value = "";
          document.getElementById("claveRetiro").value = "";
          document.getElementById("retirarDinero").value = "";
        }
    }

  } else {
    alert("El usuario o clave son incorrectos");
  }
  
 }

}
