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

function calcularCapacidadPago (montoDisponible){
    let capacidad= montoDisponible*0.5;
    return capacidad;
}

function calcularInteresSimple (monto, tasa, plazoAnios){
    let interes= plazoAnios*monto*tasa/100;
    interes= interes.toFixed(2);
    return interes;
}
    

