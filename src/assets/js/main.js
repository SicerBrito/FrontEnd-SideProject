document.addEventListener('DOMContentLoaded', async function () {
    let data; // Mover la variable data a un ámbito más amplio

    const cardsContainer = document.querySelector('.cards');

    try {
        const response = await fetch('http://localhost:9000/Api/Perfil');
        if (!response.ok) {
            throw new Error('Error al obtener los datos de la API');
        }

        data = await response.json();
        console.log(data);

        const cardsWrapper = document.createElement('div');
        cardsWrapper.classList.add('cards-container');

        data.forEach(perfil => {
            const card = document.createElement('div');
            card.classList.add('card');

            const tecnologiasList = perfil.perfilTecnologias.map(tecnologia => tecnologia.fkTecnologiaId).join(', ');
            const solicitudesList = perfil.perfilSolicitudes.map(solicitud => solicitud.fkSolicitudId).join(', ');

            card.innerHTML = `
                <h2>${perfil.nombres || 'N/A'} ${perfil.apellidos || 'N/A'}</h2>
                <p>Email: ${perfil.email || 'N/A'}</p>
                <p>Seniority: ${perfil.fkSeniorityId || 'N/A'}</p>
                <p>Especialidad: ${perfil.fkEspecialidadId || 'N/A'}</p>
                <p>Genero: ${perfil.fkGeneroId || 'N/A'}</p>
                <p>Ubicación: ${perfil.fkUbicacionId || 'N/A'}</p>
                <p>Pretensión Salarial: ${perfil.pretensionSalarialUSD || 'N/A'}</p>
                <p>Nivel de Inglés: ${perfil.fkNivelInglesId || 'N/A'}</p>
                <p>Disponibilidad: ${perfil.fkDisponibilidadId || 'N/A'}</p>
                <p>Tecnologías: ${tecnologiasList || 'N/A'}</p>
                <p>Solicitudes: ${solicitudesList || 'N/A'}</p>

                <button onclick="abrirModalVerCandidato(${perfil.id})" data-bs-toggle="modal" data-bs-target="#verCandidatoPerfilModal">Ver Candidato</button>
                <button onclick="abrirModalEditar(${perfil.id})" data-bs-toggle="modal" data-bs-target="#editarPerfilModal">Editar</button>
                <button onclick="abrirModalEliminar(${perfil.id})" data-bs-toggle="modal" data-bs-target="#eliminarPerfilModal">Eliminar</button>
            `;

            cardsWrapper.appendChild(card);
        });

        cardsContainer.appendChild(cardsWrapper);
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
    }
});

function abrirModalEditar(perfilId) {
    // Implementa la lógica necesaria para abrir el modal de edición
    console.log(`Abrir modal de edición para el perfil con ID: ${perfilId}`);
}

function abrirModalEliminar(perfilId) {
    // Implementa la lógica necesaria para abrir el modal de eliminación
    console.log(`Abrir modal de eliminación para el perfil con ID: ${perfilId}`);
}
