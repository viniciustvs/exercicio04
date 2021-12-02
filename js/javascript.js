function calcular(){
// let nota1 = parseInt(document.getElementById('nota1').value);
// let nota2 = parseInt(document.getElementById('nota2').value);
// let resultado1 = parseInt(nota1 + nota2) / 2;
// let nota3 = parseInt(document.getElementById('nota3').value);
// let nota4 = parseInt(document.getElementById('nota4').value);
// let resultado2 = parseInt(nota3 + nota4) / 2;
// let nota5 = parseInt(document.getElementById('nota5').value);
// let nota6 = parseInt(document.getElementById('nota6').value);
// let resultado3 = parseInt(nota5 + nota6) / 2;
// let nota7 = parseInt(document.getElementById('nota7').value);
// let nota8 = parseInt(document.getElementById('nota8').value);
// let resultado4 = parseInt(nota7 + nota8) / 2;
// let resultado5 = parseInt(resultado1 + resultado2 + resultado3 + resultado4) / 4;
// let resultado = document.getElementById('resultado');

let nota1 = parseInt(document.getElementById('nota1').value);
let nota2 = parseInt(document.getElementById('nota2').value);
let nota3 = parseInt(document.getElementById('nota3').value);
let nota4 = parseInt(document.getElementById('nota4').value);
let media = parseInt(nota1 + nota2 + nota3 + nota4) / 4;
let resultado = document.getElementById('resultado');

console.log(media)
if(media <= 3.9){

    resultado.innerHTML = (`nota  ${nota1} nota  ${nota2} nota  ${nota3} nota  ${nota4} media final ${media} REPROVADO conceito E`);
    
} else if(media == 4 || media <= 5.9){

    resultado.innerHTML = (`nota  ${nota1} nota  ${nota2} nota  ${nota3} nota  ${nota4} media final ${media} REPROVADO conceito D`);

} else if(media == 6 || media <= 7.4){

    resultado.innerHTML = (`nota  ${nota1} nota  ${nota2} nota  ${nota3} nota  ${nota4} media final ${media} APROVADO conceito C`);

} else if(media == 7.5 || media <= 8.9){

    resultado.innerHTML = (`nota  ${nota1} nota  ${nota2} nota  ${nota3} nota  ${nota4} media final ${media} APROVADO conceito B`);

} else if(media >= 9 || media <= 10){

    resultado.innerHTML = (`nota  ${nota1} nota  ${nota2} nota  ${nota3} nota  ${nota4} media final ${media} APROVADO conceito A`);
}

}