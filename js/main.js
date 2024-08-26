
function agregarTarea() {
    const input = document.getElementById('nuevaTarea');
    const tareaTexto = input.value.trim();
    if (tareaTexto === '') return; // No hacer nada si el campo está vacío
    
    const lista = document.getElementById('listaTareas');
    
    // Crear el nuevo elemento de lista
    const li = document.createElement('li');
    li.className = 'tarea';
    
    // Crear el span para el texto de la tarea
    const span = document.createElement('span');
    span.innerText = tareaTexto;
    span.onclick = function() {
        this.classList.toggle('completada');
    };
    
    // Crear el botón de eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.innerText = 'Eliminar';
    btnEliminar.onclick = function() {
        lista.removeChild(li);
    };
    
    // Añadir el span y el botón al elemento de lista
    li.appendChild(span);
    li.appendChild(btnEliminar);
    
    // Añadir el elemento de lista a la lista de tareas
    lista.appendChild(li);
    
    // Limpiar el campo de entrada
    input.value = '';
}

function cambiarEstilo(id, color) {
    
    document.getElementById('texto-color1').style.color = '';
    document.getElementById('texto-color2').style.color = '';
    document.getElementById('texto-color3').style.color = '';
    
   
    let elemento = document.getElementById(id);
    elemento.style.color = color;
    elemento.style.fontSize = '1.5rem';
}

// Función para alternar el menú desplegable
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
}

// Cierra el dropdown si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('#menu-inicio')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

