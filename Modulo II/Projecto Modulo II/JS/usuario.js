class Usuario{
    constructor(nombre,clave,monto,anterior,deposito,retiro){ //Caracteristicas del usuario y declaracion de sus variables
        this.nombre = nombre;
        this.clave = clave;
        this.monto = monto;
        this.anterior = anterior;
        this.deposito = deposito;
        this.retiro = retiro;
    }

imprimirConsultarSaldo(){ //Funcion para consultar saldo
    var html="";
    html += "<ul>";
            html += "   <li class='list-group-item'>" + "Cuentahabiente:" + " " + this.nombre + "</li>"; 
            html += "   <li class='list-group-item'>" + "Monto disponible:" + " " + this.monto + "</li>";
    html += "</ul>"
    document.getElementById("consultarDeposito").innerHTML =  html;
}    

imprimirDeposito(){
    var html="";
    html += "<ul>";
            html += "   <li class='list-group-item'>" + "Cuentahabiente:" + " " + this.nombre + "</li>";
            html += "   <li class='list-group-item'>" + "Monto anterior:" + " " + this.anterior + "</li>";
            html += "   <li class='list-group-item'>" + "Monto depositado:" + " " + this.deposito + "</li>";
            html += "   <li class='list-group-item'>" + "Monto disponible:" + " " + this.monto + "</li>";
    html += "</ul>"
    document.getElementById("consultarDeposito").innerHTML =  html;
}    

imprimirRetiro(){
    var html="";
    html += "<ul>";
            html += "   <li class='list-group-item'>" + "Cuentahabiente:" + " " + this.nombre + "</li>";
            html += "   <li class='list-group-item'>" + "Monto anterior:" + " " + this.anterior + "</li>";
            html += "   <li class='list-group-item'>" + "Monto retirado:" + " " + this.retiro + "</li>";
            html += "   <li class='list-group-item'>" + "Monto disponible:" + " " + this.monto + "</li>";
    html += "</ul>"
    document.getElementById("consultarDeposito").innerHTML =  html;
}    



}