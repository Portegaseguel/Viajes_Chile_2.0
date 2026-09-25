window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );

    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    alert('Formulario enviado con éxito!');
});






