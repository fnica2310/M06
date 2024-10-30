// Definimos el array con las letras correspondientes al cálculo del DNI
var lletres = ['T', 'R', 'W', 'A', 'G', 'M', 'I', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Creamos una función que manejará todo el proceso de cálculo y validación
function validarDNI() {
    while (true) {
        // Pedimos al usuario el número de DNI y la letra
        let numeroDNI = prompt("Introduce tu número de DNI (sin la letra):");
        let letraUsuario = prompt("Introduce la letra de tu DNI:");

        // Convertimos el número de DNI a un entero y validamos si está en el rango válido
        numeroDNI = parseInt(numeroDNI);

        if (isNaN(numeroDNI) || numeroDNI <= 0 || numeroDNI >= 99999999) {
            alert("El número proporcionado no es válido. Debe ser un número entre 1 y 99999999.");
            continue; // Volvemos a pedir el número y letra
        }

        // Calculamos la letra correspondiente al DNI
        let letraCalculada = lletres[numeroDNI % 23];

        // Comparamos la letra calculada con la letra introducida por el usuario, ignorando mayúsculas y minúsculas
        if (letraCalculada === letraUsuario.toUpperCase()) {
            alert("El número y la letra de DNI son correctos.");
            break; // Salimos del bucle si todo es correcto
        } else {
            alert("La letra que has indicado no es correcta.");
        }
    }
}
