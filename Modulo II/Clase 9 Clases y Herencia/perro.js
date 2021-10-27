class Perro extends Animal{
    registrarPerro(nombre){
        let html = "";
        html += "<tr>";
        html += "   <td>" + this.tipo_animal + "</td>";
        html += "   <td>" + this.color + "</td>";
        html += "   <td>" + this.edad + "</td>";
        html += "   <td>" + this.peso + "</td>";
        html += "   <td>"+ nombre +"</td>";
        html += "</tr>";
        document.getElementById("registros").insertAdjacentHTML('beforeend', html);
    }
}