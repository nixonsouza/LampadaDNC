var lamp = document.getElementById('lampada')

function estaQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
}

function ligar(){
    if (!estaQuebrada()){
        lamp.src = '/DesafioLampada/imagens/ligada.png'
    }
    
}
function desligar(){
    if(!estaQuebrada()){
        lamp.src = '/DesafioLampada/imagens/desligada.png'
    }
    
}

lamp.addEventListener('click', quebrar)

function quebrar(){
lamp.src = '/DesafioLampada/imagens/quebrada.png'
}