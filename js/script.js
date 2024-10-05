// script.js
document.getElementById('resetForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token'); // Obtiene el token del URL

    // Validación de las contraseñas
    if (newPassword !== confirmPassword) {
        document.getElementById('message').textContent = 'Las contraseñas no coinciden.';
        return;
    }

    // Hacer la solicitud para cambiar la contraseña
    const response = await fetch('https://lgraveshxqrjfpvdbgry.supabase.co/auth/v1/reset-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncmF2ZXNoeHFyamZwdmRiZ3J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzMzYzMjksImV4cCI6MjA0MTkxMjMyOX0.Zo_r77Z8rasJkRKTFpRUdOv7s6Ncfe9lTZuovcrqzKc'
        },
        body: JSON.stringify({
            password: newPassword,
            token: token // Incluye el token en el cuerpo de la solicitud
        })
    });

    // Manejo de la respuesta
    if (response.ok) {
        document.getElementById('message').textContent = '¡Contraseña cambiada con éxito!';
    } else {
        const errorData = await response.json();
        document.getElementById('message').textContent = errorData.message || 'Ocurrió un error. Inténtalo de nuevo.';
    }
});
