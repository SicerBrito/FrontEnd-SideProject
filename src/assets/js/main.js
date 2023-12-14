// main.js
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

                // Agregar contenido del perfil a la card
                card.innerHTML = `
                    <h2>${perfil.Nombres || 'N/A'} ${perfil.Apellidos || 'N/A'}</h2>
                    <p>Email: ${perfil.Email || 'N/A'}</p>
                    <p>Seniority: ${perfil.Senioritys ? perfil.Senioritys.Nombre || 'N/A' : 'N/A'}</p>
                    <p>Especialidad: ${perfil.Especialidades ? perfil.Especialidades.Nombre || 'N/A' : 'N/A'}</p>
                    <!-- Agrega más campos según tus necesidades -->

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
