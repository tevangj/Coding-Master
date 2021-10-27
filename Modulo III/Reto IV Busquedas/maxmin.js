let limites = [-1,4,7,2,-4,1,-9,4,0,2,4,5,12];

maxmin(limites);

function maxmin(arreglo){
    let maximo = Math.max(...arreglo);
    let minimo = Math.min(...arreglo);
    console.log(maximo);
    console.log(minimo);
}
