// Variables globals per al comptador
let victorias = 0;
let derrotas = 0;
let empates = 0;

// Opcions per a la màquina
var opciones = [0, 1, 2];
var eleccionMaquina;

function aleatorio(minimo, maximo){
    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}

function usuario(eleccionUsuario){
    eleccionUsuario = parseInt(eleccionUsuario);
    eleccionMaquina = aleatorio(0, 2);

    let resultado = '';
    
    if(eleccionUsuario === 0) { // El usuario eligió piedra
        if(opciones[eleccionMaquina] === 1) { // La máquina eligió papel
            resultado = '<h1>¡Perdiste!</h1> <h3>La máquina eligió papel y tu piedra.</h3>';
            derrotas++;
        } else if(opciones[eleccionMaquina] === 2) { // La máquina eligió tijera
            resultado = '<h1>¡Ganaste!</h1> <h3>La máquina eligió tijera y tu piedra.</h3>';
            victorias++;
        } else {
            resultado = '<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>';
            empates++;
        }
    } else if(eleccionUsuario === 1) { // El usuario eligió papel
        if(opciones[eleccionMaquina] === 2) { // La máquina eligió tijera
            resultado = '<h1>¡Perdiste!</h1> <h3>La máquina eligió tijera y tu papel.</h3>';
            derrotas++;
        } else if(opciones[eleccionMaquina] === 0) { // La máquina eligió piedra
            resultado = '<h1>¡Ganaste!</h1> <h3>La máquina eligió piedra y tu papel.</h3>';
            victorias++;
        } else {
            resultado = '<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>';
            empates++;
        }
    } else if(eleccionUsuario === 2) { // El usuario eligió tijera
        if(opciones[eleccionMaquina] === 0) { // La máquina eligió piedra
            resultado = '<h1>¡Perdiste!</h1> <h3>La máquina eligió piedra y tu tijera.</h3>';
            derrotas++;
        } else if(opciones[eleccionMaquina] === 1) { // La máquina eligió papel
            resultado = '<h1>¡Ganaste!</h1> <h3>La máquina eligió papel y tu tijera.</h3>';
            victorias++;
        } else {
            resultado = '<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>';
            empates++;
        }
    }
    
    document.getElementById('efecto').innerHTML = resultado;
    actualizarContador();
}

function actualizarContador() {
    document.getElementById('contador').innerHTML = `
        <h2>Estadísticas</h2>
        <p>Victorias: ${victorias}</p>
        <p>Derrotas: ${derrotas}</p>
        <p>Empates: ${empates}</p>
    `;
}
// Funció per reiniciar el comptador
function reiniciarContador() {
    victorias = 0;
    derrotas = 0;
    empates = 0;
    actualizarContador();
    document.getElementById('efecto').innerHTML = '<h1>¡Contador reiniciado!</h1>';
}
// Funció per mostrar la data
function mostrarFechaHora() {
    const diasSemana = ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"];
    const meses = ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"];
    
    const fecha = new Date();
    const diaSemana = diasSemana[fecha.getDay()];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const any = fecha.getFullYear();
    
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    if (minutos < 10) minutos = "0" + minutos;
    if (hora < 10) hora = "0" + hora;

    const mensaje = `Avui és ${diaSemana} ${dia} de ${mes} de ${any} i son les ${hora}:${minutos} hores.`;
    document.getElementById("fecha-hora").innerHTML = mensaje;
}

window.onload = mostrarFechaHora;
