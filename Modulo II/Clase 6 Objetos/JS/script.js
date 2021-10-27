let usuario = {
    nombre: "Mario",
    email:"mario.lopez@gmail.com",
    password:"123mario",
    edad: 25,
    telefono: 5565050,
};

function MostrarInformacion (usuario){
    console.log(usuario.nombre);
    return usuario.password;
}

MostrarInformacion(usuario);

let carro = {
    color: "azul",
    llantas: 4,
    modelo: "R8 Audi",
    marca: "audi",
    encender: function (){
        return "El carro esta encendido"
    },
    apager:function(){
        return "Apagar vehiculo"
    },
    llernarCombustible: function(confirmacion){
        if(confirmacion === "si"){
            return "Su tanque ha sido llenado";
        } else {
            return "No se ha llenado su tanque";
        }
    },
    informacionColorLlantas: function(){
        return "El color del vehiculo es: " + this.color + "y tiene " + this.llantas + "llantas";
    },

    motor:{
        nitro: true,
        turbo: false,
        cilindros: 8,
    },
    informacionMotor: function(){
        return "El motor tiene " + this.motor.cilindros + " cilindros";
    }
};

let carro2 = {
    color: "azul",
    llantas: 4,
    modelo: "R8 Audi",
    marca: "audi",
    encender: function (){
        return "El carro esta encendido"
    },
    apager:function(){
        return "Apagar vehiculo"
    },
    llernarCombustible: function(confirmacion){
        if(confirmacion === "si"){
            return "Su tanque ha sido llenado";
        } else {
            return "No se ha llenado su tanque";
        }
    },
    informacionColorLlantas: function(){
        return "El color del vehiculo es: " + this.color + "y tiene " + this.llantas + "llantas";
    },

    motor:{
        nitro: true,
        turbo: false,
        cilindros: 8,
    },
    informacionMotor: function(){
        return "El motor tiene " + this.motor.cilindros + " cilindros";
    }
};

//Los parmetros de una fucion solo con para la funcion
function InformacionVehiculo(vehiculo){
    console.log(vehiculo.encender());
    console.log(vehiculo.apagar());
    console.log(vehiculo.color);
    console.log(vehiculo.llantas);
    console.log(vehiculo.informacionColorLlantas());
    console.log(vehiculo.informacionMotor());
    console.log(" El vehiculo tiene nitro?: " + vehiculo.motor.nitro);
    console.log(vehiculo.modelo);
    console.log(vehiculo.marca);
}

function SolicitarInformacionVehiculo();
    let colorVehiculo = prompt("Ingresa un color");
    carro2.color = colorVehiculo;
    console.log(carro2.color);

InformacionVehiculo(carro);