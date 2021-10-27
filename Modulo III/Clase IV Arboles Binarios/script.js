let frutas = ["Manzana" , "Pera", "Melon", "Naranja", "Uva"];

let fruta = promopt("Que furta estas buscando")

buscar(fruta);

function buscar(nombre){
    let bandera = false;
    for (let index = 0; index < frutas.length; i++){
        const element = frutas[index];
        if(element == nombre){
            alert("Lo encontre!");
            bandera = true;
        }
    }
    if(bandera == false){
        alert("No lo encontre")
    }
}