
let num1 = Number(prompt('Digite sua primeira nota: '));
let num2 = Number(prompt('Digite sua segunda nota: '))
let num3 = Number(prompt('Digite sua terceira nota: '))
let media = ((num1 + num2 + num3) / 3)

if(media >= 7){
    console.log('Parabéns você foi APROVADO !!')

}else if(media >= 5 && media <= 6.9 ){
    console.log('Você ficou de RECUPERAÇÃO !!')
}else{
    console.log('Infelizmente você foi REPROVADO !!')
}



















//Calculadora de Média
//Receba três notas de um aluno e determine se ele foi aprovado (média >= 7), está em recuperação (média entre 5 e 6.9), ou reprovado (média < 5).

