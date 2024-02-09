function aplicarDesconto(valorTotal) {
    if (valorTotal >= 3000) {
        return valorTotal * 0.9;
    }
    else if (valorTotal >= 2501 && valorTotal <= 2999) {
        return valorTotal * 0.95;
    }
    else {
        return valorTotal;
    }
}



function calcular() {
    const nome = document.getElementById("nome").value;
    const numero = parseFloat(document.getElementById("valor").value);
    const gastosLucas = 2500
    const gastosLeila = 5250
    const gastosDaniel = 4150
    const desconto1 = 0
    const desconto2 = 5
    const desconto3 = 10




    let gastos;
    let desconto;
    switch (true) {
        case gastos >= 3000:
            desconto = "10%";
            break;
        case gastos >= 2501 && gastos <= 2999:
            desconto = "5%";
            break;
        case gastos <= 2500:
            desconto = "0%";


    }
    document.getElementById("Lucas").innerHTML = "Lucas gastou R$" + gastosLucas + ",00 ,então teve um desconto de " + desconto1 + "% e pagou apenas R$" + aplicarDesconto(gastosLucas);
    document.getElementById("Leila").innerHTML = "Leila gastou R$" + gastosLeila + ",00 ,então teve um desconto de " + desconto3 + "% e pagou apenas R$" + aplicarDesconto(gastosLeila);
    document.getElementById("Daniel").innerHTML = "Daniel gastou R$" + gastosDaniel + ",00 ,então teve um desconto de " + desconto2 + "% e pagou apenas R$" + aplicarDesconto(gastosDaniel);
    document.getElementById("desconto").innerHTML = nome + " gastou R$" + numero + ",00 ,então teve um desconto de " + desconto + " e pagou apenas " + aplicarDesconto(numero);


}