/*// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//array para guardar nombres
const listaAmigos=[];
let numeroAmigo=""
//funcion para agregar amigos
function agregarAmigo() {
    listaAmigos.push(document.getElementById('amigo').value);
    console.log(listaAmigos);
    if(document.getElementById('amigo').value=""){
        alert("Por favor, inserte un nombre")
    }
    return;
}
//funcion para actualizar lista de amigos
//funcion para sortear amigos
*/

const amigo = [];
let listaAmigosSorteados = [];
const listaAmigosIngresados = [];
let nombreAmigo ="";

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    //elementoHTML corresponde a un elemento en codigo HTML, h1, p, body, etc
    return;
}

function agregarAmigo() {
    //let nombreAmigo = document.querySelector('input'); //sellecion de valor por querySelector
  
    nombreAmigo = document.getElementById('amigo').value; //selecion de valor por ID
   
    // si el nombre ingresado esta en la lista, se debe volver a ingresar un numero, sino añadir al listado
   console.log (nombreAmigo);
   if (document.querySelector('#amigo').value == '') {
    alert ("Por favor inserte un nombre");
    } else {
        if (listaAmigosIngresados.includes(nombreAmigo)) {
       // asignarTextoElemento ('h2','ERROR, ESE NOMBRE YA EXISTE');
        alert ('ERROR: ese nombre ya existe, intente nuevamente');
        } else {
        listaAmigosIngresados.push(nombreAmigo);
        limpiarNombre ();
        } 
        limpiarNombre ();
        console.log(listaAmigosIngresados);
    }
}

function limpiarNombre () {
    document.querySelector('#amigo').value = '';
    //asignarTextoElemento ('h2', 'Digite el nombre de sus amigos')
}

function sortearAmigo() {
    if (listaAmigosIngresados.length === 0) {
        alert ("No quedan amigos por sortear.");
        return null;
    }
    
    // Selecciona un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigosIngresados.length);
    
    // Obtiene el nombre y lo elimina de la lista original
    const amigoSorteado = listaAmigosIngresados.splice(indiceAleatorio, 1)[0];
    
    // Agrega el nombre a la lista de sorteados
    listaAmigosSorteados.push(amigoSorteado);
    
    alert (`Amigo sorteado: ${amigoSorteado}`);
    console.log("Amigos restantes:", listaAmigosIngresados);
    console.log("Amigos sorteados:", listaAmigosSorteados);
    
    return amigoSorteado;
}


/*
function verificarListaAmigos() {
funcion para establecer condiciones inciiales de mensajes?    
}
*/