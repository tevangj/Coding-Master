function pedirDatos(){
    let tipo_animal = prompt("Ingrese el tipo de animal");
    let color = prompt("Ingrese el color del animal");
    let edad = prompt("Ingrese la edad del animal");
    let peso = prompt("Ingrese el peso del animal");

    if(tipo_animal== "Perro"){
        let nombre = prompt("Ingrese el nombre del perro");
        let perro = new Perro(tipo_animal, color, edad, peso);
        perro.registrarPerro(nombre);
    }
    else{
        let instancia = new Animal(tipo_animal, color, edad, peso);
        instancia.registrarAnimal();
    }
}

let btnRegistrar = document.getElementById("registrar");
btnRegistrar.addEventListener('click', pedirDatos, false);