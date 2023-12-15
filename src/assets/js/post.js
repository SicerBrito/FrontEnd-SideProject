document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.querySelector('.cards');
    const editarPerfilModal = document.getElementById('editarPerfilModal');
    const eliminarPerfilModal = document.getElementById('eliminarPerfilModal');
    const nuevoPerfilModal = document.getElementById('nuevoPerfilModal');
    const editarPerfilForm = document.getElementById('editarPerfilForm');
    const eliminarPerfilForm = document.getElementById('eliminarPerfilForm');
    const nuevoPerfilForm = document.getElementById('nuevoPerfilForm');

    // ...

    // Función para abrir el modal de edición con los datos del perfil
    function abrirModalEditar(perfil) {
        // Lógica para cargar los datos en el formulario del modal de edición
        // Puedes utilizar las propiedades del perfil para prellenar los campos del formulario

        // Muestra el modal de edición
        $('#editarPerfilModal').modal('show');
    }

    // Función para abrir el modal de eliminación
    function abrirModalEliminar(perfilId) {
        // Lógica para mostrar información del perfil a eliminar en el modal
        // Puedes mostrar el nombre u otra información relevante

        // Muestra el modal de eliminación
        $('#eliminarPerfilModal').modal('show');
    }

    // Función para abrir el modal de agregar nuevo perfil
    function abrirModalNuevo() {
        // Lógica para preparar el formulario de nuevo perfil

        // Muestra el modal de nuevo perfil
        $('#nuevoPerfilModal').modal('show');
    }

    // Evento click para el botón de editar en cada card
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('editar-btn')) {
            const perfilId = event.target.dataset.perfilId;
            const perfil = obtenerPerfilPorId(perfilId); // Implementa la lógica para obtener el perfil
            abrirModalEditar(perfil);
        }
    });

    // Evento click para el botón de eliminar en cada card
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('eliminar-btn')) {
            const perfilId = event.target.dataset.perfilId;
            abrirModalEliminar(perfilId);
        }
    });

    // Evento click para el botón de agregar nuevo perfil
    document.getElementById('agregarNuevoPerfilBtn').addEventListener('click', function () {
        abrirModalNuevo();
    });

    // ...

    // Funciones CRUD (puedes personalizar según tus necesidades)
    function editarCard(perfilId) {
        // Implementar lógica de edición aquí
        console.log(`Editar perfil con ID: ${perfilId}`);
        // Cierra el modal de edición después de realizar la acción
        $('#editarPerfilModal').modal('hide');
    }

    function eliminarCard(perfilId) {
        // Implementar lógica de eliminación aquí
        console.log(`Eliminar perfil con ID: ${perfilId}`);
        // Cierra el modal de eliminación después de realizar la acción
        $('#eliminarPerfilModal').modal('hide');
    }

    function agregarNuevoPerfil() {
        // Implementar lógica para agregar un nuevo perfil aquí
        console.log('Agregar nuevo perfil');
        // Cierra el modal de nuevo perfil después de realizar la acción
        $('#nuevoPerfilModal').modal('hide');
    }

    // ...

});
