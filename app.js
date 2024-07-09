// Función para encriptar el texto
function encryptText() {
    let input = document.getElementById("inputTexto").value;
    let encryptedText = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("outputText").innerText = encryptedText;
    document.getElementById("inputText").value = encryptedText; // Mostrar texto encriptado en el segundo input
}

// Función para desencriptar el texto
function decryptText() {
    let input = document.getElementById("inputTexto").value;
    let decryptedText = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("outputText").innerText = decryptedText;
    document.getElementById("inputText").value = decryptedText; // Mostrar texto desencriptado en el segundo input
}

// Función para copiar el texto encriptado/desencriptado
function copiar() {
    let textToCopy = document.getElementById("inputText");
    textToCopy.select();
    document.execCommand("copy");
    alert("Texto copiado: " + textToCopy.value);
}

