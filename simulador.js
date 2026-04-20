
//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    //let ingresos= parsefloat(document.getElementById("txtIngresos").value);
    //let egresos= parsefloat(document.getElementById("txtEgresos").value);

    //let disponible= calcularDisponible (ingresos, egresos);
    let ingresos= recuperarFloat("txtIngresos");
    let egresos= recuperarFloat("txtEgresos");

    //Guardar retorno en una variable
    let disponible= calcularDisponible (ingresos, egresos);


    //Paso previo para mostrar la respuesta
    let spDisponible= document.getElementById("spnDisponible");

    //Mostrar texto en pantalla
    spDisponible.textContent= disponible;

//Capacidad de pago
    let capacidadPago= calcularCapacidadPago(disponible);
    let spCapacidadPago= document.getElementById("spnCapacidadPago");
    spCapacidadPago.textContent=capacidadPago;

//Interes
    let monto= recuperarFloat ("txtMonto");
    let plazo= recuperarFloat ("txtPlazo");
    let tasaInteres= recuperarFloat ("txtTasaInteres");

    let tasa= calcularInteresSimple(monto, plazo, tasaInteres);
    let spTasa= document. getElementById("spnInteresPagar");
    spTasa.textContent= tasa;

//Total pagar 
    let totalPagar= calcularTotalPagar(monto, tasa);
    let spTotalPagar= document.getElementById("spnTotalPrestamo");
    spTotalPagar.textContent=totalPagar;

}