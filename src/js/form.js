// Este archivo contiene la lógica para manejar el formulario de contacto, incluyendo la validación de campos y el envío de datos.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (validateForm(name, email, message)) {
            // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, usando fetch o XMLHttpRequest
            console.log('Formulario enviado:', { name, email, message });
            alert('Gracias por tu mensaje. Me pondré en contacto contigo pronto.');
            form.reset();
        }
    });

    function validateForm(name, email, message) {
        if (!name || !email || !message) {
            alert('Por favor, completa todos los campos.');
            return false;
        }
        if (!validateEmail(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});