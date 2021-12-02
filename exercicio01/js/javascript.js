function decidir (){
    let number1= parseInt(document.getElementById('number1').value);
    let number2= parseInt(document.getElementById('number2').value);
    let resultado= document.getElementById('resultado');
    
    if(number1 > number2){
        resultado.innerHTML = (`O valor ${number1} é o maior`);
    
    } else if(number2 > number1){
        resultado.innerHTML = (`O valor ${number2} é o maior`)
    }
}

function verificar (){
    let numero= parseInt(document.getElementById('numero').value);
    let resultados= document.getElementById('resultados');

    if(numero > 0){
        resultados.innerHTML = (`O valor ${numero} é positivo`);
        
    } else if(numero == 0){
        resultados.innerHTML = (`O valor ${numero} neutro`);
        console.log(numero);
    } else if(numero < 0){
        resultados.innerHTML = (`O valor ${numero} é negativo`);
        console.log(numero);
    }
}

function sexo(){
    let nome = document.getElementById('nome').value;
    let resultados1 = document.getElementById('resultados1');

    if(nome == 'F' || nome == 'f'){
        resultados1.innerHTML = (`feminino`);
    } else if(nome == 'M' || nome == 'm'){
        resultados1.innerHTML = (`masculino`);
    } else {
        resultados1.innerHTML = (`sexo invalido`);
    }

}