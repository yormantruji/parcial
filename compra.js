function calcularTotal() {
    // Obtener el valor de la cantidad de Bandeja Paisa
    var cantidadBandejaPaisa = parseFloat(document.getElementById("cantidad_bandejapaisa").value);
    // Obtener el valor de la cantidad de Arroz con Pollo
    var cantidadArrozConPollo = parseFloat(document.getElementById("cantidad_arrozconpollo").value);

    // Precios de los platos
    var precioBandejaPaisa = 10000; // $10.000
    var precioArrozConPollo = 8000; // $8.000

    // Calcular el total a pagar
    var totalPagar = cantidadBandejaPaisa * precioBandejaPaisa + cantidadArrozConPollo * precioArrozConPollo;

    // Actualizar el valor mostrado en la página
    document.getElementById("totalPagar").textContent = totalPagar.toFixed(0); // Redondear a dos decimales
}

