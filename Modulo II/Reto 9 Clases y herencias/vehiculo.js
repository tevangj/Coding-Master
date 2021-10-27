class Vehiculo{
    constructor(color, marca, modelo, combustible, transmision, tipo_vehiculo){
        this.color = color,
        this.marca = marca,
        this.modelo = modelo,
        this.combustible = combustible,
        this.transmision = transmision,
        this.tipo_vehiculo=tipo_vehiculo
    }

registrarVehiculo(){
    let html = "";
    html += "<tr>";
    html += "   <td>" + this.color + "</td>";
    html += "   <td>" + this.marca + "</td>";
    html += "   <td>" + this.modelo + "</td>";
    html += "   <td>" + this.combustible + "</td>";
    html += "   <td>" + this.transmision + "</td>";
    html += "   <td>" + this.tipo_vehiculo + "</td>";
    html += "   <td></td>";
    html += "</tr>";
    document.getElementById("registros").insertAdjacentHTML('beforeend', html);
   } 
}
