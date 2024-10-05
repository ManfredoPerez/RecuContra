// script.js
document.getElementById('resetForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token'); // Obtiene el token del URL

    if (newPassword !== confirmPassword) {
        document.getElementById('message').textContent = 'Las contraseñas no coinciden.';
        return;
    }

    const response = await fetch('https://lgraveshxqrjfpvdbgry.supabase.co/auth/v1/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncmF2ZXNoeHFyamZwdmRiZ3J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzMzYzMjksImV4cCI6MjA0MTkxMjMyOX0.Zo_r77Z8rasJkRKTFpRUdOv7s6Ncfe9lTZuovcrqzKc',
            'Authorization': `Bearer ${token}` // Usa el token de recuperación
        },
        body: JSON.stringify({ password: newPassword })
    });

    if (response.ok) {
        document.getElementById('message').textContent = '¡Contraseña cambiada con éxito!';
    } else {
        const errorData = await response.json();
        document.getElementById('message').textContent = errorData.message;
    }
});
