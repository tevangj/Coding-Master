const precios = [200,180,160,150]; //precio de cada producto
const productos =["Aqua", "Emoción" , "Alegría", "Frescura"]; //Nombre de los productos
var venta_t =[];

botonventaspedro();
botonventasjauana();
vendedordelmes();

function botonventasjauana(){

    let numero_ventas_juana = []; // Arreglo donde se suman las ventas de Juana
    let venta_por_producto_juana = [];
    let total_venta_j = 0;
    let total_j = 0;
    let vendedorttotal = {};

        for(i = 0 ; i < productos.length; i++){ //Loop que hace la suma de cada producto
        numero_ventas_juana[i] = prompt("Ingrese el numero producto de " + productos[i] + " vendidos por Juana");
        numero_ventas_juana.push;
        venta_por_producto_juana[i] = numero_ventas_juana[i] + " " + productos[i];
        total_venta_j = "Por un total de ventas de: " + numero_ventas_juana[i] * precios[i] + " pesos";
        total_j = numero_ventas_juana[i] * precios[i];
        
        }
 
        console.log(venta_por_producto_juana,total_venta_j);
        vendedorttotal.nombre = "juana";
        vendedorttotal.total = total_j;
        venta_t.push(vendedorttotal);

}

function botonventaspedro(){

    let numero_ventas_pedro = []; // Arreglo donde se suman las ventas de Juana
    let venta_por_producto_pedro = [];
    let total_venta_p = 0;
    let total_p = 0;
    let vendedorttotal = {};

    for(i = 0 ; i < productos.length; i++){ //Loop que hace la suma de cada producto

        numero_ventas_pedro[i] = prompt("Ingrese el numero producto de " + productos[i] + " vendidos por Pedro");
        numero_ventas_pedro.push;
        venta_por_producto_pedro[i] = numero_ventas_pedro[i] + " " + productos[i];
        total_venta_p = "Por un total de ventas de: " + numero_ventas_pedro[i] * precios[i] + " pesos";
        total_p = numero_ventas_pedro[i] * precios[i];

     }
        console.log(venta_por_producto_pedro,total_venta_p);
        vendedorttotal.nombre = "pedro";
        vendedorttotal.total = total_p;
        venta_t.push(vendedorttotal);

    }


function nombresvendedores (nombre){
    let total = 0;
    for(i=0;i<venta_t.length;i++){
        if(nombre == venta_t[i].nombre){
                total = venta_t[i].total;
        }

    }
     return total;

}

function vendedordelmes(){

 let a = nombresvendedores ("juana");
 let b = nombresvendedores ("pedro");
    if (a > b ){
        console.log("Juana es la vendedora del mes");
    }   else {
         console.log("Pedro es el vendedor del mes");
    }
 
}

/*function validar__nombre {
    for(i = 0 ; i < productos.length; i++)
    let nombre_producto = prompt("Ingrese el numero producto de " + productos[i] + " vendidos por ");
*/