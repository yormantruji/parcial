function actualizarPrecio() {
    var habitacionSelect = document.getElementById("habitacion");
    var precioNocheInput = document.getElementById("precioNoche");
    var precio = habitacionSelect.options[habitacionSelect.selectedIndex].getAttribute("data-precio");
    precioNocheInput.value = "$" + precio;
}

function calcularTotal() {
    var fechaIngreso = new Date(document.getElementById("fecha_ingreso").value);
    var fechaSalida = new Date(document.getElementById("fecha_salida").value);
    var noches = Math.ceil((fechaSalida - fechaIngreso) / (1000 * 60 * 60 * 24));
    var precioNoche = parseFloat(document.getElementById("precioNoche").value.replace("$", ""));
    var total = noches * precioNoche;
    document.getElementById("noches").value = noches;
    document.getElementById("total").value = "$" + total.toFixed(2);
}
document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los elementos relevantes del formulario
    var elementosFormulario = document.querySelectorAll("#reservaForm input, #reservaForm select");

    // Agregar un event listener para cada elemento del formulario
    elementosFormulario.forEach(function(elemento) {
        elemento.addEventListener("change", function() {
            actualizarPrecio();
            calcularTotal();
        });
    });
});
