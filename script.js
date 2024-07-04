// Obtener el formulario y los campos
const form = document.getElementById('client-form');
const name = document.getElementById('name');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const birthdate = document.getElementById('birthdate');
const gender = document.getElementById('gender');

// Expresiones regulares para validaciones
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;

// Función para mostrar errores
function showError(input, message) {
    input.classList.add('is-invalid');
    input.nextElementSibling.textContent = message;
}

// Función para limpiar errores
function clearError(input) {
    input.classList.remove('is-invalid');
}

// Validar campos en tiempo real
function validateInput(input, regex, message) {
    input.addEventListener('input', function() {
        if (!regex.test(input.value)) {
            showError(input, message);
        } else {
            clearError(input);
        }
    });
}

// Validar que el teléfono solo contenga números
phone.addEventListener('input', function() {
    phone.value = phone.value.replace(/\D/g, '');
    if (!phoneRegex.test(phone.value)) {
        showError(phone, 'Por favor, ingrese un número de teléfono válido (solo números, 10 dígitos).');
    } else {
        clearError(phone);
    }
});

// Validar la fecha de nacimiento en tiempo real
birthdate.addEventListener('input', function() {
    const today = new Date();
    const birthdateValue = new Date(birthdate.value);
    const age = today.getFullYear() - birthdateValue.getFullYear();
    const month = today.getMonth() - birthdateValue.getMonth();
    const day = today.getDate() - birthdateValue.getDate();
    const isAdult = (age > 18) || (age === 18 && month >= 0 && day >= 0);

    if (!isAdult) {
        showError(birthdate, 'Debe ser mayor de 18 años.');
    } else {
        clearError(birthdate);
    }
});

// Validaciones en tiempo real para otros campos
validateInput(name, /.+/, 'Por favor, ingrese su nombre.');
validateInput(lastName, /.+/, 'Por favor, ingrese su apellido.');
validateInput(email, emailRegex, 'Por favor, ingrese un correo electrónico válido.');
validateInput(address, /.+/, 'Por favor, ingrese su dirección.');
validateInput(gender, /.+/, 'Por favor, seleccione su género.');

// Validar el formulario al enviarlo
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    let isValid = true;

    if (!name.value.trim()) {
        showError(name, 'Por favor, ingrese su nombre.');
        isValid = false;
    }

    if (!lastName.value.trim()) {
        showError(lastName, 'Por favor, ingrese su apellido.');
        isValid = false;
    }

    if (!emailRegex.test(email.value)) {
        showError(email, 'Por favor, ingrese un correo electrónico válido.');
        isValid = false;
    }

    if (!phoneRegex.test(phone.value)) {
        showError(phone, 'Por favor, ingrese un número de teléfono válido (solo números, 10 dígitos).');
        isValid = false;
    }

    if (!address.value.trim()) {
        showError(address, 'Por favor, ingrese su dirección.');
        isValid = false;
    }

    const today = new Date();
    const birthdateValue = new Date(birthdate.value);
    const age = today.getFullYear() - birthdateValue.getFullYear();
    const month = today.getMonth() - birthdateValue.getMonth();
    const day = today.getDate() - birthdateValue.getDate();
    const isAdult = (age > 18) || (age === 18 && month >= 0 && day >= 0);

    if (!isAdult) {
        showError(birthdate, 'Debe ser mayor de 18 años.');
        isValid = false;
    }

    if (!gender.value.trim()) {
        showError(gender, 'Por favor, seleccione su género.');
        isValid = false;
    }

    if (isValid) {
        // Animación de envío del formulario
        form.classList.remove('animate__fadeInUp');
        form.classList.add('animate__fadeOutDown');
        setTimeout(function() {
            form.style.display = 'none';
            alert('¡Datos enviados correctamente!');
        }, 500);
    }
});
