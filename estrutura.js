var lamp = window.document.getElementById("lampada")

function estaQuebrada() {
    return lamp.src.indexOf('image3') > -1
}

function Ligar() {
    if (!estaQuebrada()){
        lamp.src = 'assets/images/image1.png'
    }
}

function Desligar() {
    if (!estaQuebrada()){
    lamp.src = 'assets/images/image2.png'
    }
}

lamp.addEventListener('click', Quebrar)
function Quebrar() {
    lamp.src = "assets/images/image3.png"
}