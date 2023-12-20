document.addEventListener("DOMContentLoaded", function() {
    // Agrega estilos de fondo negro al body mientras carga la página
    document.body.style.backgroundColor = "black";

    // Utiliza fetch para cargar la página de carga
    fetch("loader.html")
        .then(response => response.text())
        .then(html => {
            // Agrega la página de carga al contenedor
            document.getElementById("loaderContainer").innerHTML = html;

            // Temporizador para ocultar la página de carga después de 1 segundo
            setTimeout(function() {
                document.getElementById("loaderContainer").style.display = "none";
                document.getElementById("mainContainer").style.display = "block";
                document.body.style.backgroundColor = ""; // Restablece el fondo del body
                document.body.style.overflow = "auto"; // Restablece el scroll del cuerpo
            }, 2000); // 1000 milisegundos = 1 segundo
        })
        .catch(error => console.error("Error al cargar la página de carga:", error));
});
