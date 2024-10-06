// Inicialización del cliente de Supabase
const supabaseUrl = 'https://lgraveshxqrjfpvdbgry.supabase.co'; // Cambia con tu URL de Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncmF2ZXNoeHFyamZwdmRiZ3J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzMzYzMjksImV4cCI6MjA0MTkxMjMyOX0.Zo_r77Z8rasJkRKTFpRUdOv7s6Ncfe9lTZuovcrqzKc';

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('resetForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Verificar si las contraseñas coinciden
    if (newPassword !== confirmPassword) {
        document.getElementById('message').textContent = 'Las contraseñas no coinciden.';
        return; // No continuar si las contraseñas no coinciden
    }

    try {
        // Actualizar la contraseña usando Supabase
        const { error } = await supabase.auth.updateUser({ password: newPassword });

        if (error) {
            // Mostrar mensaje de error si hay algún problema
            document.getElementById('message').textContent = `Error: ${error.message}`;
        } else {
            // Mostrar mensaje de éxito
            document.getElementById('message').textContent = '¡Contraseña cambiada con éxito! La página se cerrará en 5 segundos.';

            // Cerrar la página después de 5 segundos
            setTimeout(() => {
                window.close(); // Intentar cerrar la pestaña/ventana
            }, 5000);
        }
    } catch (error) {
        // Mostrar mensaje en caso de error en el catch
        document.getElementById('message').textContent = `Error: ${error.message}`;
    }
});
