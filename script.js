document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const registro = { nombre, email, password };
    const registros = JSON.parse(localStorage.getItem('registros')) || [];
    registros.push(registro);
    localStorage.setItem('registros', JSON.stringify(registros));

    document.getElementById('registroForm').reset();
    mostrarRegistros();
});

function mostrarRegistros() {
    const registros = JSON.parse(localStorage.getItem('registros')) || [];
    const registroList = document.getElementById('registroList');
    registroList.innerHTML = '';

    registros.forEach(registro => {
        const li = document.createElement('li');
        li.textContent = `Nombre: ${registro.nombre}, Email: ${registro.email}`;
        registroList.appendChild(li);
    });
}

mostrarRegistros();
