//Estrucutra de datos y definición de variables globales
const listaAmigosSorteados = []; // Registra nombres sorteados para comparar con nombres ingresado
const listaAmigosIngresados = []; // Registra nombres ingresados
let nombreAmigo = ""; // Variable que almacena temporalmente el nombre ingresado
let mensaje = ""; // Variable global almacena temporalmente mensajes para el usuario

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

// Captura y valida el nombre del participante
function agregarAmigo() {
    nombreAmigo = document.getElementById('amigo').value.trim(); // Selección de valor por ID y eliminando espacios

    // Verificar que el campo no este vacio
    if (nombreAmigo === '') {
        mensaje = "Por favor inserte un nombre válido";
        asignarTextoElemento('.section-title', mensaje);
        return;
    }
    
    // NORMALIZACIÓN: Para evitar poder ingresar el mismo nombre con diferencia de minusculas y mayusculas
    const listaEnMinusculas = listaAmigosIngresados.map(amigo => amigo.toLowerCase());
    // Convertir nombre actual a minúsculas para comparar
    const nombreEnMinusculas = nombreAmigo.toLowerCase();

    // Verificar duplicados, con minusculas y mayusculas, en lista normalizada
    if (listaEnMinusculas.includes(nombreEnMinusculas)) {
        mensaje = 'ERROR: ese nombre ya existe, intente nuevamente';
        asignarTextoElemento('.section-title', mensaje);
    
    // Si no hay error, se actualiza el Array original (conservando las mayúsculas originales)
    } else {
        listaAmigosIngresados.push(nombreAmigo);
        actualizarLista();

        mensaje = "Digite el nombre de sus amigos";
        asignarTextoElemento('.section-title', mensaje);
    }
    limpiarNombre();
}

// Reestablece el campo para ingresar nombre
function limpiarNombre() {
    document.getElementById('amigo').value = '';
}
 
// Actualiza la lista visible en pantalla con los nombres ingresados
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorre la lista de amigos y crea un elemento visual para cada uno
    for (const amigo of listaAmigosIngresados) {
        let elemento = document.createElement('li');
        elemento.textContent = amigo;
        lista.appendChild(elemento);
    }
}

// Ejecuta el sorteo y devuelve los nombres de forma aleatoria
function sortearAmigo() {
    // Verifica si existen nombres por sortear, de lo contrario muestra advertencia
    if (listaAmigosIngresados.length === 0) {
        mensaje = "No quedan amigos por sortear.";
        asignarTextoElemento('.section-title', mensaje);
        return null;
    } 
       
    // Generación de números aleatorios basado en índice de los elementos
    const indiceAleatorio = Math.floor(Math.random() * listaAmigosIngresados.length);
    
    // Elimina el amigo sorteado del Array de amigos ingresados
    const amigoSorteado = listaAmigosIngresados.splice(indiceAleatorio, 1)[0];
    listaAmigosSorteados.push(amigoSorteado); // Registro histórico de elementos sorteados

    // Actualizar lista de nombres restantes
    actualizarLista();

    // Mensaje corregido con comillas invertidas (``) y el punto (.) de la clase CSS
    mensaje = `El amigo Secreto es: ${amigoSorteado}`;
    asignarTextoElemento('.section-title', mensaje);

    // Verificación en consola para pruebas técnicas
    console.log("Amigos restantes:", listaAmigosIngresados);
    console.log("Amigos sorteados:", listaAmigosSorteados);
    
    return amigoSorteado;
}

