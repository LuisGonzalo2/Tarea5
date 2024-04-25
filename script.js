// Obtener el formulario
const form = document.getElementById('client-form');

// Agregar un evento de envío al formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Validar los campos
    if (name.trim() === '' || lastName.trim() === '' || email.trim() === '' || phone.trim() === '' || address.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Animación de envío del formulario
    form.classList.remove('animate__fadeInUp');
    form.classList.add('animate__fadeOutDown');
    setTimeout(function() {
        form.style.display = 'none';
        alert('¡Datos enviados correctamente!');
    }, 500);
});
