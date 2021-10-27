function mensaje(){
    let elemento = document.getElementById("body");
    elemento.style.backgroundColor = "black";
    elemento.style.margin = "40vh";
    let contadorDeCajas = documento.getE2lementsbyClassName("caja").length;
    alert("-tengo " + contadorDeCajas + " Divs");
    for (let index = 0; index < contadorDeCajas; index++){
        const element = document.getElementsByClassName("Caja")[index];
        element.style.backgroundImage = "url(https://picsum.photos/" +(index+1) + "00/" + (index+1) + "00?random)"

}