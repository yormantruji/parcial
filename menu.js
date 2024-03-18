// script.js
function mostrarFormulario(idFormulario) {
    const formulario = document.getElementById(idFormulario);
    formulario.style.display = "block";
}
// Enlazar el evento de clic al botón "Comprar"
document.getElementById("comprar_btn").addEventListener("click", function() {
    mostrarFormulario("compraForm");
});
document.getElementById("comprar_btn").addEventListener("click", function() {
    window.location.href = "compra.html"; // Redireccionar a la página de compra
