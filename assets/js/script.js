document.querySelector('form').addEventListener('submit', function(e) {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Todos los campos son obligatorios.');
    }
});

