let misVehiculos = [];
function pedirDatosVehiculo(){
    let color = prompt("Ingrese el colo del vehículo");
    let marca = prompt("Ingrese la marca del vehículo");
    let modelo = prompt("Ingrese el modelo del vehículo");
    let combustible = prompt("Ingrese el tipo de combustible");
    let transmision = prompt("Ingrese el tipo de transmisión");
    let tipo_vehiculo = prompt("Ingrese el tipo de vehículo");

    if(tipo_vehiculo == "Automovil"){
        let tipo_automovil = prompt("Ingrese el tipo de automovil");
        let asientos = prompt("Ingrese el número de asientos");
        let automovil= new Automovil(color,marca,modelo,combustible,transmision,tipo_vehiculo);
        misVehiculos.push(automovil);
        automovil.registrarAutomovil(tipo_automovil,asientos);
        
    }
    else if (tipo_vehiculo == "Motocicleta"){
        let tipo_motocicleta = prompt("Ingrese el tipo de motocicleta");
        let motocicleta = new Motocicleta(color,marca,modelo,combustible,transmision,tipo_vehiculo);
        misVehiculos.push(motocicleta);
        motocicleta.registrarMotocicleta(tipo_motocicleta);
        
    } 
    else {
        let otro_vehiculo = new Vehiculo(color,marca,modelo,combustible,transmision,tipo_vehiculo);
        misVehiculos.push(otro_vehiculo);
        otro_vehiculo.registrarVehiculo();
        
    }
    let garage = new miGarage();
    garage.misVehiculos(misVehiculos);
     

}



let btnRegistrar = document.getElementById("registrar");
btnRegistrar.addEventListener('click', pedirDatosVehiculo, false);

