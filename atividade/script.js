function mudarTexto() {
    document.getElementById("texto").innerText = "JavaScript";
}

function mudarFundo() {
    document.body.style.backgroundColor = "#2c3e50";
}

let contador = 0;

function aumentarContador() {
    contador++;
    document.getElementById("contador").innerText = contador;
}