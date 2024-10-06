// Inicializa el cliente de Supabase
console.log("Prueba JS")

// Asegúrate de que supabase esté inicializado correctamente antes de cualquier otro uso
const supabaseUrl = 'https://lgraveshxqrjfpvdbgry.supabase.co'; // Cambia con tu URL de Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncmF2ZXNoeHFyamZwdmRiZ3J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzMzYzMjksImV4cCI6MjA0MTkxMjMyOX0.Zo_r77Z8rasJkRKTFpRUdOv7s6Ncfe9lTZuovcrqzKc';

// Inicializa el cliente de Supabase
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('resetForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Verifica si las contraseñas coinciden
    if (newPassword !== confirmPassword) {
        document.getElementById('message').textContent = 'Las contraseñas no coinciden.';
        return;
    }

    try {
        // Actualiza la contraseña usando Supabase auth.updateUser
        const { error } = await supabase.auth.updateUser({ password: newPassword });

        if (error) {
            document.getElementById('message').textContent = `Error: ${error.message}`;
        } else {
            document.getElementById('message').textContent = '¡Contraseña cambiada con éxito!';
        }
    } catch (error) {
        document.getElementById('message').textContent = `Error: ${error.message}`;
    }
});

