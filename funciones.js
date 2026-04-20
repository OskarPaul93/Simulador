function recuperarTexto(idComponente){
    let componente= document.getElementById(idComponente);
    let valor= componente.value;

    return valor;
}

function recuperarFloat (idComponente){
    let valorTexto= recuperarTexto(idComponente);
    let valorFloat= parseFloat (valorTexto);

    return valorFloat
}
//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible (ingresos, egresos){
    let disponible= ingresos - egresos;
    disponible= disponible.toFixed(2);
    if (disponible<0){
        disponible= 0;

    }



    return disponible; 
}


