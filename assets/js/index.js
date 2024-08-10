window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';  
  } else {
      navbar.style.backgroundColor = 'transparent';  
  }
});


document.addEventListener('DOMContentLoaded', function() {
   let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
   
   let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
       return new bootstrap.Tooltip(tooltipTriggerEl);
   });
 });

document.getElementById('myForm').addEventListener('submit', function(event) {
event.preventDefault();

alert('Formulario enviado con éxito!');
});

let myModal = document.getElementById('myModal')
let myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
myInput.focus()
})









