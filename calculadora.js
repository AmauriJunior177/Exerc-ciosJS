alert('Bem vindo a calculadora js!')
let operador = prompt('Escolha entre +, -, /, * ')
let num1 = parseInt(prompt('Digite um número'))
let num2 = parseInt(prompt('Digite outro número'))



if(operador == '+'){
    console.log('A soma de ' + num1 + ' + ' + num2 + ' é = ' + (num1 + num2))
}else if(operador == '-'){
    console.log('A subtração de ' + num1 + ' - ' + num2 + ' é = ' + (num1 - num2))
}else if(operador == '/' ){
    if(num2 == 0){
        console.log('Não é possível dividir por zero')
    }else{
        console.log('A divisão de ' + num1 + ' / ' + num2 + ' é = ' + (num1 / num2))
    }
}else if(operador == '*'){
    console.log('A multiplicação de ' + num1 + ' * ' + num2 + ' é = ' + (num1 * num2))
}else {
    console.log('Operação inválida')
}


















//Calculadora Simples (com if else)
//Crie um programa que simula uma calculadora simples, onde o usuário escolhe uma operação (soma, subtração, multiplicação ou divisão) e insere dois números. O programa deve fazer a operação escolhida e exibir o resultado.

//O programa deve pedir ao usuário para escolher uma operação: +, -, *, /
//Caso o usuário insira uma operação inválida, exiba "Operação inválida".
//Caso haja uma tentativa de divisão por zero, exiba "Não é possível dividir por zero".