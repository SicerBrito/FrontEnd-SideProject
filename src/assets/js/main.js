document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.querySelector('.cards');

    // Realizar una solicitud GET a la API
    fetch('http://localhost:9000/Api/Perfil')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Inspeccionar datos en la consola
            data.forEach(perfil => {
                // Crear una nueva card para cada perfil
                const card = document.createElement('div');
                card.classList.add('card');

                // Construir una lista de tecnologías
                const tecnologiasList = perfil.perfilTecnologias.map(tecnologia => tecnologia.fkTecnologiaId).join(', ');

                // Construir una lista de solicitudes
                const solicitudesList = perfil.perfilSolicitudes.map(solicitud => solicitud.fkSolicitudId).join(', ');

                // Agregar contenido del perfil a la card
                card.innerHTML = `
                    <h2>${perfil.nombres || 'N/A'} ${perfil.apellidos || 'N/A'}</h2>
                    <p>Email: ${perfil.email || 'N/A'}</p>
                    <p>Seniority: ${perfil.fkSeniorityId || 'N/A'}</p>
                    <p>Especialidad: ${perfil.fkEspecialidadId || 'N/A'}</p>
                    <p>Ubicación: ${perfil.fkUbicacionId || 'N/A'}</p>
                    <p>Pretensión Salarial: ${perfil.pretensionSalarialUSD || 'N/A'}</p>
                    <p>Nivel de Inglés: ${perfil.fkNivelInglesId || 'N/A'}</p>
                    <p>Disponibilidad: ${perfil.fkDisponibilidadId || 'N/A'}</p>
                    <p>Tecnologías: ${tecnologiasList || 'N/A'}</p>
                    <p>Solicitudes: ${solicitudesList || 'N/A'}</p>

                    <!-- Botones de CRUD -->
                    <button onclick="editarCard(${perfil.id})">Editar</button>
                    <button onclick="eliminarCard(${perfil.id})">Eliminar</button>
                `;

                // Agregar la card al contenedor
                cardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error al obtener los datos de la API:', error));
});

// Funciones CRUD (puedes personalizar según tus necesidades)
function editarCard(perfilId) {
    // Implementar lógica de edición aquí
    console.log(`Editar perfil con ID: ${perfilId}`);
}

function eliminarCard(perfilId) {
    // Implementar lógica de eliminación aquí
    console.log(`Eliminar perfil con ID: ${perfilId}`);
}


const navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener("click", function() {
  if (navbarToggler.classList.contains("active")) {
    navbarToggler.classList.remove("active");
  }
});


function enviarPerfil() {
    // Obtener los valores del formulario
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var email = document.getElementById('email').value;

    // Crear un objeto con los datos del perfil
    var perfil = {
        Nombres: nombres,
        Apellidos: apellidos,
        Email: email
        // Agrega los demás campos según sea necesario
    };

    // Realizar la solicitud AJAX usando XMLHttpRequest
    var xhr = new XMLHttpRequest();
    var url = 'http://localhost:9000/Api/Perfil';

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Convertir el objeto a formato JSON
    var jsonPerfil = JSON.stringify(perfil);

    // Manejar la respuesta de la solicitud
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert('Solicitud POST exitosa');
            } else {
                alert('Error en la solicitud POST. Código de estado: ' + xhr.status);
            }
        }
    };

    // Enviar la solicitud con los datos del perfil en formato JSON
    xhr.send(jsonPerfil);
}
