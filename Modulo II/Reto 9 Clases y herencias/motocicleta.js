class Motocicleta extends Vehiculo{
    registrarMotocicleta(tipo_motocicleta) {
        let html = "";
        html += "<tr>";
        html += "   <td>" + this.color + "</td>";
        html += "   <td>" + this.marca + "</td>";
        html += "   <td>" + this.modelo + "</td>";
        html += "   <td>" + this.combustible + "</td>";
        html += "   <td>" + this.transmision + "</td>";
        html += "   <td>" + this.tipo_vehiculo + "</td>";
        html += "   <td>" + "" + "</td>";
        html += "   <td>" + "" + "</td>";
        html += "   <td>" + tipo_motocicleta + "</td>";
        html += "   <td></td>";
        html += "</tr>";
        document.getElementById("registros").insertAdjacentHTML('beforeend', html);
    }

}