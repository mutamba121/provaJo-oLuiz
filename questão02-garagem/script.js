function calcularFinan (valorInicial) {
    return valorInicial * 1.3;
}

function calcularConsó (valorInicial) {
    return valorInicial * 1.15;
}

function CalcularVista (valorInicial) {
    return valorInicial;
}



let imposto = (document.getElementById("imposto"));
let financiamento = (document.getElementById("finan"));
let consórcio = (document.getElementById("consó"));
let vistar = (document.getElementById("vista"));
let valor;

function impostos() {
    if ( imposto = calcularFinan ) {
       return calcularFinan
    }
    else if ( imposto = calcularConsó ) {
        return calcularConsó
    }
    else if ( imposto = CalcularVista ) {
        return CalcularVista
    }
    else {
        return ("ERRO. Categoria inválida")
    }
}
    

function calcularImp(){
    const valor = parseFloat(document.getElementById("valorInicial"));
    const financ = parseFloat(document.getElementById("finan"));
    const consor = parseFloat(document.getElementById("consó"));
    const vist = parseFloat(document.getElementById("vista"));

    return document.getElementById("final").innerHTML = "O valor final é: " + calcularFinan(valor, financ, consor, vist);
}


