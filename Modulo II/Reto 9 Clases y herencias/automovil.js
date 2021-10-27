class Automovil extends Vehiculo{
    registrarAutomovil(tipo_automovil, asientos) {
        let html = "";
        html += "<tr>";
        html += "   <td>" + this.color + "</td>";
        html += "   <td>" + this.marca + "</td>";
        html += "   <td>" + this.modelo + "</td>";
        html += "   <td>" + this.combustible + "</td>";
        html += "   <td>" + this.transmision + "</td>";
        html += "   <td>" + this.tipo_vehiculo + "</td>";
        html += "   <td>" + tipo_automovil + "</td>";
        html += "   <td>" + asientos + "</td>";
        html += "   <td></td>";
        html += "</tr>";
        document.getElementById("registros").insertAdjacentHTML('beforeend', html);


    }

}