let articulos = [];

function agregarArticulo(){
    let articulo = {};

    let nombre = document.getElementById("nombre").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio").value;
    

    articulo.nombre = nombre;
    articulo["cantidad"] = cantidad;
    articulo.precio = precio;
    articulos.push(articulo);

    document.getElementById("nombre").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("registros").innerHTML = "";
    
    mostrarRegistro();
    calcularTotal();
}

function mostrarRegistro(){
    var html = "";
    for (let index = 0; index < articulos.length; index++) {
        let elemento = articulos[index];
        html += "<tr>";
        html += "   <th scope='row'>" + (index + 1) + "</th>";
        html += "   <td>" + elemento.nombre + "</td>";
        html += "   <td>" + elemento.cantidad + "</td>";
        html += "   <td>" + elemento.precio + "</td>";
        html += "</tr>";
    }
    console.log(html);
    document.getElementById("registros").innerHTML =  html;
}

function calcularTotal(){
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
    html += "</tr>";
    document.getElementById("registros").insertAdjacentHTML("beforeend", html);
}