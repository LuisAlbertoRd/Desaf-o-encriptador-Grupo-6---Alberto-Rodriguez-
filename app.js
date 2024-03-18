//Encriptador de Textos 
/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

let arr = [''];
let arrDos = [''];
let mensajeEncriptado = arr;

/* FUNCION QUE ENCRIPTA*/
function encriptar() {
    let textoUsuario = document.getElementById('textoTecleado').value
    textoUsuario = (textoUsuario.toLowerCase());
    arr = textoUsuario.split('');
    /*console.log(textoUsuario);*/
    recorriendoMensaje(arr);
    mensajeEncriptado = arr.join('');
    /*console.log(mensajeEncriptado);*/
    asginarTextoModificado('p',mensajeEncriptado);
    return;
}

function validar() {
    let comprobarTextArea = document.getElementById('textoTecleado');
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúüñÁÉÍÓÚÜÑ']/g;
    if (comprobarTextArea.value === '') {
        asginarTextoModificado('p', '<strong>Ningún mensaje fue encontrado</strong><br>Ingresa el texto que desees encriptar o desencriptar.');
    } else if (caracteres.test(comprobarTextArea.value)) {
        asginarTextoModificado('p', 'No se permiten acentos ni caracteres especiales');
    } else {
        document.getElementById('imgBorrar').style.display = 'none';
    }
    return;
}


function recorriendoMensaje(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'a') {
            arr[i] = 'ai';            
        }
        else if (arr[i] === 'e') {
            arr[i] = 'enter';            
        }
        else if (arr[i] === 'i') {
            arr[i] = 'imes';            
        }
        else if (arr[i] === 'o') {
            arr[i] = 'ober';            
        }
        else if (arr[i] === 'u') {
            arr[i] = 'ufat';            
        }
    }
    return;
}

function asginarTextoModificado(elemento, texto) {
    let solucion = document.querySelector(elemento);
    solucion.innerHTML = texto;
    return;
}

function encriptarMenosImagen() {
    encriptar();
    validar();
    return;
}

/* INICIA PARTE DEL DESENCRIPTADO */
function desencriptar() {
    let textoUsuario = document.getElementById('textoTecleado').value
    textoUsuario = (textoUsuario.toLowerCase());
    arrDos = textoUsuario.split('');
    /*console.log(textoUsuario);*/
    desencriptandoMensaje(arrDos);
    mensajeEncriptado = arrDos.join('');
    /*console.log(mensajeEncriptado);*/
    asginarTextoModificado('p',mensajeEncriptado);
    return;
}

/* FUNCION QUE DESENCRIPTA*/
function desencriptandoMensaje(arrDos) {
    for (let j = 0; j < arrDos.length; j++) {
        if (arrDos[j] === 'a') {
            arrDos.splice(j+1, 1);            
        }
        else if (arrDos[j] === 'e') {
            arrDos.splice(j+1, 4);            
        }
        else if (arrDos[j] === 'i') {
            arrDos.splice(j+1, 3);            
        }
        else if (arrDos[j] === 'o') {
            arrDos.splice(j+1, 3);            
        }
        else if (arrDos[j] === 'u') {
            arrDos.splice(j+1, 3);            
        }
    }
    return;
}

function desencriptarMenosImagen() {
    desencriptar();
    validar();
    return;
}

function copiarTexto() {
    let textoParaCopiar = document.querySelector('#txtPass').innerText;
    navigator.clipboard.writeText(textoParaCopiar).then(function() {
        console.log('Texto copiado al portapapeles');
    });
}

