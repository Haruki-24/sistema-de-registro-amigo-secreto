const listaAmigosSorteados = [];
const listaAmigosIngresados = [];
let nombreAmigo = "";

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

function agregarAmigo() {
    nombreAmigo = document.getElementById('amigo').value.trim(); // Selección de valor por ID y eliminando espacios

    if (nombreAmigo === '') {
        alert("Por favor inserte un nombre");
        return;
    }
    
    if (listaAmigosIngresados.includes(nombreAmigo)) {
        alert('ERROR: ese nombre ya existe, intente nuevamente');
    } else {
        listaAmigosIngresados.push(nombreAmigo);
        actualizarLista();
    }
    limpiarNombre();
}

function limpiarNombre() {
    document.getElementById('amigo').value = '';
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar
    
    for (const amigo of listaAmigosIngresados) {
        let elemento = document.createElement('li');
        elemento.textContent = amigo;
        lista.appendChild(elemento);
    }
}

function sortearAmigo() {
    if (listaAmigosIngresados.length === 0) {
        alert("No quedan amigos por sortear.");
        return null;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigosIngresados.length);
    const amigoSorteado = listaAmigosIngresados.splice(indiceAleatorio, 1)[0];
    listaAmigosSorteados.push(amigoSorteado);
    
    actualizarLista();
    alert(`Amigo sorteado: ${amigoSorteado}`);
    
    console.log("Amigos restantes:", listaAmigosIngresados);
    console.log("Amigos sorteados:", listaAmigosSorteados);
    
    return amigoSorteado;
}
