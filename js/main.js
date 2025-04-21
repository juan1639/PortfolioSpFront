function obtenerLenguajes()
{
    fetch('http://localhost:8080/api/lenguajes')
        .then(response => response.json())
        .then(data => {
            const lenguajesList = document.getElementById('lenguajes-list');
            lenguajesList.innerHTML = '';
            data.forEach(lenguaje => {
                const listItem = document.createElement('li');
                listItem.textContent = lenguaje.nombre;  // Ajusta según el campo real
                lenguajesList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error obteniendo lenguajes:', error));
}

function obtenerProyectos() {
    fetch('http://localhost:8080/api/proyectos')
        .then(response => response.json())
        .then(data => {
            const proyectosList = document.getElementById('proyectos-list');
            proyectosList.innerHTML = '';
            data.forEach(proyecto => {
                const listItem = document.createElement('li');
                listItem.textContent = proyecto.nombre;  // Ajusta según el campo real
                proyectosList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error obteniendo proyectos:', error));
}

function registrarUsuario(event)
{
    event.preventDefault();  // Evita que el formulario recargue la página

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const newUser =
    {
        username: username,
        password: password,
        role: role
    };

    fetch('http://localhost:8080/api/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
        const messageDiv = document.getElementById('registro-message');
        messageDiv.textContent = 'Usuario registrado: ' + data.username;
    })
    .catch(error => console.error('Error registrando usuario:', error));
}

// =====================================================================
//  Llamar las funciones al cargar la página
// 
// ---------------------------------------------------------------------
window.onload = () =>
{
    obtenerLenguajes();
    obtenerProyectos();

    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', registrarUsuario);
};

/* document.addEventListener('DOMContentLoaded', function () {
    obtenerLenguajes();
    obtenerProyectos();

    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', registrarUsuario);
}); */
