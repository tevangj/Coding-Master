let articulos = [];
let vendedores = [];
let agregarArticulo = () => {
    let articulo = {};

    let nombre = document.getElementById("nombre").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio").value;
    let vendedor = document.getElementById("vendedor").value;


    articulo.nombre = nombre;
    articulo["cantidad"] = cantidad;
    articulo.precio = precio;
    articulo.vendedor = vendedor;
    articulos.push(articulo);

    document.getElementById("nombre").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("vendedor").value = "";
    document.getElementById("registros").innerHTML = "";

    mostrarRegistro();
    calcularTotal();
}

function FiltersExample() {
    let alumnosList = [
        {
            nombre: "Luis",
            promedio: 7
        },
        {
            nombre: "Juan",
            promedio: 4
        },
        {
            nombre: "Karla",
            promedio: 9
        },
        {
            nombre: "Lucia",
            promedio: 8
        },
        {
            nombre: "Rebeca",
            promedio: 4
        },
        {
            nombre: "Erick",
            promedio: 10
        }
    ];

    console.log("array de objectos de alumnos antes de filtrar");
    console.log(alumnosList);
    let resultadoFiltro = alumnosList.filter( item => item.promedio > 7 );
    let resultadoMap = alumnosList.map((item) => {
        if( item.promedio < 7){
            return item.nombre
        }        
    });
    
    console.log(alumnosList);
    console.log("despues de filtrar");
    console.log(resultadoFiltro);
    console.log("resultado map");
    console.log(resultadoMap);
    



















    // const numbersList = [ 9, 3, 32, 53, 90, 244, 1, 3, 4, 2, 0 ];
    // console.log(numbersList);
    // let numbersListFiltrado = numbersList.filter((item) => {
    //         if(item > 32 && item < 200){
    //             return item;
    //         }
    // });
    // console.log(numbersListFiltrado);
}

FiltersExample();

let mostrarRegistro = () => {
    var html = "";
    for (let index = 0; index < articulos.length; index++) {
        let elemento = articulos[index];
        html += "<tr>";
        html += "   <th scope='row'>" + (index + 1) + "</th>";
        html += "   <td>" + elemento.nombre + "</td>";
        html += "   <td>" + elemento.cantidad + "</td>";
        html += "   <td>" + elemento.precio + "</td>";
        html += "   <td>" + elemento.vendedor + "</td>";
        html += "</tr>";
    }
    console.log( "Transformando a ForEach" );
    
    let arrayArticulos = [
        {
            nombre: "Monitor",
            cantidad: 5,
            precio: 3.4,
            vendedor: "Ismael"
        },
        {
            nombre: "Monitor",
            cantidad: 5,
            precio: 3.4,
            vendedor: "Ismael"
        },
        {
            nombre: "Caja",
            cantidad: 5,
            precio: 3.4,
            vendedor: "karla"
        }
    ];

    arrayArticulos.forEach( (item, index) => {
            console.log( item.vendedor );
    } );

    articulos.forEach((item, index) => {
        let articulo = item;
        html += "<tr>";
        html += "   <th scope='row'>" + (index + 1) + "</th>";
        html += "   <td>" + articulo.nombre + "</td>";
        html += "   <td>" + articulo.cantidad + "</td>";
        html += "   <td>" + articulo.precio + "</td>";
        html += "   <td>" + articulo.vendedor + "</td>";
        html += "</tr>";
    });

    const letras = [ 'a', 'b', 'c'];
                    //0    1    2
    letras.forEach((item, index) => {
        console.log( "El valor es: " + item + " y su posicion es: " + index);
    });
    //item es el valor de la posicion
    //index es la posicion
    console.log(html);
    document.getElementById("registros").innerHTML = html;


    
}

function calcularTotal() {
    let total = 0;
    let total_cantidad = 0;
    for (let index = 0; index < articulos.length; index++) {
        const element = articulos[index];
        total += (element.cantidad * element.precio);
        total_cantidad += +element.cantidad;
    }
    let html = "";
    html += "<tr>";
    html += "   <th scope='row'></th>";
    html += "   <td></td>";
    html += "   <td>Total cantidad de Articulos:" + total_cantidad + "</td>";
    html += "   <td>Total:" + total + "</td>";
    html += "   <td></td>";
    html += "</tr>";
    document.getElementById("registros").insertAdjacentHTML("beforeend", html);
}

function vendedorDelMes() {
    //Guardamos las ventas en una variable local
    let ventas = articulos;

    //Creamos un array vacio para almacenar los totales de los vendedores
    let ventas_por_vendedor = [];

    //Agrupamos los vendedores y los almacenamos en una lista
    for (let index = 0; index < ventas.length; index++) {
        const element = ventas[index];
        if (checkVendedor(element.vendedor)) {
            //Si el vendedor no se encuentra en la lista lo agregamos
            vendedores.push(element.vendedor);
        }
    }

    //Es necesario recorrer el array de vendedores para poder compararlo con el filter
    //filter nos permitira agrubar nuestras ventas por vendedor
    for (let index = 0; index < vendedores.length; index++) {
        //Creamos un objeto llamado venta_mensual vacio donde guardaremos los totales de cada vendedor
        let venta_mensual = {};

        //Creamos las variables total y vendedor para almacenar los datos del filter
        let total = 0;
        let vendedor = "";

        //Agrupamos las ventas con filter enviandole el nombre de nuestra lista de vendedores
        let ventas_vendedor = ventas.filter((venta) => venta.vendedor == vendedores[index]);

        //Una vez que tenemos las ventas agrupadas, procedemos a sumar y calcular los totales para cada vendedor
        for (let index = 0; index < ventas_vendedor.length; index++) {
            const element = ventas_vendedor[index];
            total += +(ventas_vendedor[index].precio * ventas_vendedor[index].cantidad);
            vendedor = ventas_vendedor[index].vendedor;
        }

        //Cuando tenemos las ventas por vendedor las seteamos en el objeto venta_mensual
        venta_mensual.total = total;
        venta_mensual.vendedor = vendedor;

        //luego guardamos el objeto local venta_mensual en el array global ventas_por_vendedor
        ventas_por_vendedor.push(venta_mensual);

    }

    //Una vez que tenemos todas las ventas agrupadas ordenamos los totales de mayor a menor
    //Hacemos uso de sort y reverse
    ventas_por_vendedor = ventas_por_vendedor.sort(function (a, b) {
        if (a.total > b.total) {
            return 1;
        }
        if (a.total < b.total) {
            return -1;
        }
        return 0;
    }).reverse();

    //Imprimimos el venddor del mes en la posicion 0 que seria el que más vendio
    alert("El vendedor del mes es: " + ventas_por_vendedor[0].vendedor + " vendio:" + ventas_por_vendedor[0].total);
    console.log(vendedores);
}

function checkVendedor(nombre) {
    //Include nos sive para saber si un valor esta incluido en un array
    let bandera = !vendedores.includes(nombre);

    //nos devolvera false o true
    return bandera;
}



