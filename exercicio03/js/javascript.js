function calcular(){
    let produto1 = parseInt(document.getElementById('produto1').value);
    let produto2 = parseInt(document.getElementById('produto2').value);
    let produto3 = parseInt(document.getElementById('produto3').value);
    let resultado = document.getElementById('resultado');


    if(produto1 < produto2 && produto1 < produto3){
    resultado.innerHTML = (`você deve comprar o produto 1`);
} else if(produto2 < produto1 && produto2 < produto3){
    resultado.innerHTML = (`você deve comprar o produto 2`);
} else if(produto3 < produto2 && produto3 < produto1){
    resultado.innerHTML = (`você deve comprar o produto 3`);
}
}