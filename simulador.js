
//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){

    if(
    !validarIngresos() ||
    !validarEgresos() ||
    !validarMonto() ||
    !validarPlazo() ||
    !validarTasa()
){
    return;
}
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

//Cuota Mensual
    let mensual= calcularCuotaMensual(totalPagar, plazo);
    let spMensual=document.getElementById("spnCuotaMensual")
    spMensual.textContent=mensual;

//Credito Aprobado o rechazado
    let aprobado=aprobarCredito(capacidadPago,mensual);
    let spAprobado= document.getElementById("spnEstadoCredito")
    if (aprobado){
        spAprobado.textContent="CREDITO APROBADO";
    } else {
        spAprobado.textContent="CREDITO RECHAZADO"
    }

}

function esNumero(valor){
    return /^\d+(\.\d{1,2})?$/.test(valor);
}

function validarCampoVacio(valor){
    return valor.trim() !== "";
}

function validarMaxDigitos(valor, max){
    return valor.length <= max; // ahora sí cuenta el punto decimal
}

function mostrarError(id, mensaje, tipo="error"){
    let elemento = document.getElementById(id);
    elemento.textContent = mensaje;

elemento.classList.remove("error","info");
elemento.classList.add(tipo === "info" ? "info" : "error");
}

//Validar ingresos
function validarIngresos(){
    let valor = recuperarTexto("txtIngresos");

    if(!validarCampoVacio(valor)){
        mostrarError("errIngresos","Campo obligatorio");
        return false;
    }

    if(!esNumero(valor)){
        mostrarError("errIngresos","Solo números");
        return false;
    }

    if(!validarMaxDigitos(valor,8)){
    mostrarError("errMonto","Máximo 8 caracteres (incluye decimales)");
    return false;
}

    if(parseFloat(valor) < 460){
        mostrarError("errIngresos","Mínimo $460","info");
        return false;
    }

    mostrarError("errIngresos","");
    return true;
}

//Validar egresos
function validarEgresos(){
    let valor = recuperarTexto("txtEgresos");
    let ingresos = recuperarFloat("txtIngresos");

    if(!validarCampoVacio(valor)){
        mostrarError("errEgresos","Campo obligatorio");
        return false;
    }

    if(!esNumero(valor)){
        mostrarError("errEgresos","Solo números");
        return false;
    }

    if(!validarMaxDigitos(valor,8)){
        mostrarError("errEgresos","Máximo 8 dígitos");
        return false;
    }

    if(valor > ingresos * 0.5){
    mostrarError("errEgresos","No puede superar el 50% de ingresos","info");
    return false;
}

    mostrarError("errEgresos","");
    return true;
}

//Validar Monto
function validarMonto(){
    let valor = recuperarTexto("txtMonto");

    if(!validarCampoVacio(valor)){
        mostrarError("errMonto","Campo obligatorio");
        return false;
    }

    if(!esNumero(valor)){
        mostrarError("errMonto","Solo números");
        return false;
    }

    if(!validarMaxDigitos(valor,8)){
        mostrarError("errMonto","Máximo 8 dígitos");
        return false;
    }

    if(valor < 1000 || valor > 90000){
    mostrarError("errMonto","Entre $1000 y $90000","info");
    return false;
}

    mostrarError("errMonto","");
    return true;
}

//Validar Plazo
function validarPlazo(){
    let valor = recuperarTexto("txtPlazo");

    if(!validarCampoVacio(valor)){
        mostrarError("errPlazo","Campo obligatorio");
        return false;
    }

    if(!esNumero(valor)){
        mostrarError("errPlazo","Solo números");
        return false;
    }

    if(valor < 1 || valor > 5){
    mostrarError("errPlazo","Entre 1 y 5 años","info");
    return false;
}

    mostrarError("errPlazo","");
    return true;
}

//Validar Tasa
function validarTasa(){
    let valor = recuperarTexto("txtTasaInteres");

    if(!validarCampoVacio(valor)){
        mostrarError("errTasa","Campo obligatorio");
        return false;
    }

    if(!esNumero(valor)){
        mostrarError("errTasa","Solo números");
        return false;
    }

    if(valor < 10 || valor > 20){
    mostrarError("errTasa","Entre 10% y 20%","info");
    return false;
}

    mostrarError("errTasa","");
    return true;
}
