function selecionar(){
    let horario = document.getElementById('horario').value;
    let resultado = document.getElementById('resultado').value;


    if(horario == 'M' || horario == 'm'){
        // resultado.innerHTML = (`Bom dia!`);
        alert ('Bom dia!');
    } else if(horario == 'V' || horario == 'v'){
        // resultado.innerHTML = (`Boa tarde!`);
        alert ('Boa tarde!')
    } else if(horario == 'N' || horario == 'n'){
        // resultado.innerHTML = (`Boa noite!`);
        alert ('Boa noite!');
    } else {
        // resultado.innerHTML = (`valor inválido!`);
        alert ('valor inválido!');
    }
}



function calcular(){
    let nota1 = parseInt(document.getElementById('nota1').value);
    let nota2 = parseInt(document.getElementById('nota2').value);
    let nota3 = parseInt(document.getElementById('nota3').value);
    let media = parseInt(nota1 + nota2 + nota3) / 3;
    let resultados = document.getElementById('resultados');


    if(media < 7){
        resultados.innerHTML = (`Reprovado com a nota ${media}`);
    } else if(media == 10){
        resultados.innerHTML = (`Aprovado com distinção`);
    } else if(media > 7){
        resultados.innerHTML = (`Aprovado com a nota ${media}`);
    } 
}



function mostrar(){
    let alfabeto = document.getElementById('alfabeto').value;
    let result = document.getElementById('result');

    if(alfabeto === 'a' || alfabeto === 'e' || alfabeto === 'i' || alfabeto === 'o' || alfabeto === 'u'){
        result.innerHTML = (`vogal`);
    } else {
        result.innerHTML = (`consoante`);
    }
}