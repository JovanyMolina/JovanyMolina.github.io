function mostrarImagenCompleta() {
    // Obtener la imagen actual
    var imagenActual = event.target.previousElementSibling.querySelector('img');

    // Crear un contenedor modal
    var modal = document.createElement('div');
    modal.classList.add('modal');
    
    // Crear una imagen dentro del modal
    var imagenModal = document.createElement('img');
    imagenModal.src = imagenActual.src;
    modal.appendChild(imagenModal);
    
    // Botón para cerrar el modal
    var cerrarModal = document.createElement('span');
    cerrarModal.innerHTML = '&times;';
    cerrarModal.classList.add('cerrar-modal');
    modal.appendChild(cerrarModal);

    // Agregar el modal al cuerpo del documento
    document.body.appendChild(modal);

    // Cerrar modal al hacer clic en el botón cerrar
    cerrarModal.onclick = function() {
        modal.style.display = 'none';
        document.body.removeChild(modal);
    }
}
