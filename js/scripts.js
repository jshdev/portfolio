document.addEventListener('DOMContentLoaded', function() {
    
    const previewButtons = document.querySelectorAll('[data-bs-toggle="modal"]');
  
    previewButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        const modalId = event.target.getAttribute('data-bs-target');
        const modalImage = modalId.querySelector('img');
        
        });
    });
  
    const contactForm = document.querySelector('form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const mensaje = document.getElementById('mensaje').value;
  
        if (nombre && correo && mensaje) {
          alert('Gracias por tu mensaje, nos pondremos en contacto contigo pronto!');
          contactForm.reset();
        } else {
          alert('Por favor completa todos los campos.');
        }
      });
    }
  });
  