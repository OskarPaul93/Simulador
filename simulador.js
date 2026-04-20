
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

}