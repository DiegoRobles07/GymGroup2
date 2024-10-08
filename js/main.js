
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

// fuction confeti
function emoji(){
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
    };
    
    
    function shoot() {
      confetti({
        ...defaults,
        particleCount: 30,
        scalar: 1.2,
        shapes: ["circle", "square"],
        colors: ["#000000", "#fdff6a"],
      });
  
      confetti({
        ...defaults,
        particleCount: 20,
        scalar: 4,
        shapes: ["emoji"],
        shapeOptions: {
          emoji: {
            value: ["🦾", "😎","🏋️","⭐"],
          },
        },
      });
    }
    
    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  }
  


  function star(){
    const defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["star"],
        colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
      };
      
      function shoot() {
        confetti({
          ...defaults,
          particleCount: 40,
          scalar: 1.2,
          shapes: ["star"],
        });
      
        confetti({
          ...defaults,
          particleCount: 10,
          scalar: 0.75,
          shapes: ["circle"],
        });
      }
      
      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

  }