const relojEl = document.getElementById('reloj');

async function actualizarHora() {
  try {
    const resp = await fetch('/hora?nocache=' + Date.now(), { cache: 'no-store' });
    if (!resp.ok) throw new Error('Error HTTP ' + resp.status);

    // Convertimos la respuesta a objeto JSON
    const data = await resp.json();
    relojEl.textContent = data.hora; // Solo mostramos la hora

    console.log('Nueva hora recibida:', data.hora);
  } catch (err) {
    relojEl.textContent = 'Error obteniendo hora';
    console.error(err);
  }
}

actualizarHora();
setInterval(actualizarHora, 1000);