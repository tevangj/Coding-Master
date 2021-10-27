let personas = [
    {
        persona1: {
            nombre: "Pedro",
            direcciones: {
                direccion1: "Ciudad Mexico",
                direccion2: "San salvador",
                nivelN: {
                    NivelM:{
                        NivelP : ""
                    }
                }
            },
            telefonos: {
                casa: {
                    numero1: "2222-2222",
                    numero2: "3333-3333"
                },
                celular:{
                    numero1:    "7777-7777",
                    numero2:    "7777-7777",
                }
            }

        },
        persona2: {
            nombre: "Carmen",
            direcciones: {
                direccion1: "Ciudad Mexico",
                direccion2: "San salvador"
            },
            telefonos: {
                casa: {
                    numero1: "2222-2222",
                    numero2: "3333-3333"
                },
                celular:{
                    numero1:    "7777-7777",
                    numero2:    "7777-7777",
                }
            }

        },
    }
];

let propiedades = obtenerPropiedades(personas[0]);
console.log(propiedades);

function obtenerPropiedades(objeto){
    return Object.keys(objeto);
}

accederApropiedades(personas[0], propiedades);

function accederApropiedades(objeto, propiedades){
    let acceder = prompt("En el niveal actual existen las siguentes propiedades. \n"+propiedades.toString().replace(/,/g, "\n") + "\nDigita a cual quieres acceder!");
    if(typeof objeto[acceder] == "object"){
        let propiedadesInternas = obtenerPropiedades(objeto[acceder]);
        accederApropiedades(objeto[acceder], propiedadesInternas);
    }
    else{
        alert("Su valor es:" + objeto[acceder]);
    }
}

