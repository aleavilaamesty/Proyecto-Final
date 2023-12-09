// Obtener los elementos del menú
var menuItems = document.querySelectorAll("#menu a");

// Agregar un evento de clic a cada elemento del menú
menuItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
        e.preventDefault();

        // Obtener el ID de la sección a la que se hizo clic
        var seccionId = item.getAttribute("href").substring(1);

        // Mostrar la sección correspondiente y ocultar las demás
        document.querySelectorAll(".seccion").forEach(function (seccion) {
            if (seccion.id === seccionId) {
                seccion.classList.add("mostrada");
            } else {
                seccion.classList.remove("mostrada");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});

function descargarLibro() {
    window.location.href = "archivos/LIBRO1.pdf";
}

function abrirLibro() {
    window.open("archivos/LIBRO1.pdf", "_blank");
}

function descargarPDF() {
    window.location.href = "archivos/RVLJ-16-467-506.pdf";
}

function abrirPDF() {
    window.open("archivos/RVLJ-16-467-506.pdf", "_blank");
}

// Asignar el evento al botón
document.getElementById("descargarLibros").addEventListener("click", abrirLibro);
document.getElementById("abrirPDF").addEventListener("click", abrirPDF);
