let nota = Number(prompt('Digite a nota recebida: '))

switch(nota){
    case 9 || 10:
        console.log('Excelente nota! ')
        break;
    case 7 || 8 :
        console.log('Bom! ')
        break;
    case 5 || 6 :
        console.log('Regular! ')
        break;
    default:
        console.log('Ruim! ')
        break;
  
}





//Classificação de Notas
//Receba uma nota de 0 a 10 e use um switch case para classificar:

//9-10: "Excelente"
//7-8: "Bom"
//5-6: "Regular"
//0-4: "Ruim".