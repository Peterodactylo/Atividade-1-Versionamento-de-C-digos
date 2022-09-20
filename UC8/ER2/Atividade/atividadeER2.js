/*
Atividade do Card 9 - Atividade 5 - Encontro Remoto 2

Considere a quantidade de alunos presentes na sala,
percorra do zero até o número total e retornar os seguintes resultador:

- Se o número for par, escreva "par" e o número correspondente
- Se o número for ímpar, escreva "ímpar" e o número correspondente 
- Se o número for zero, escreva "zero"
*/

//primeira forma de resolver o problema

let numerodealunos = 10;

for(let contador = 0; contador <= numerodealunos; contador++)
{
    if(contador == 0){
        //console.log("O número atual é 0")
        console.log(`${contador} - ZERO`) //INTERPOLAÇÃO
        //console.log(contador + " - ZERO")  //CONCATENAÇÃO
    }
    else if((contador % 2) == 0){
        console.log(`${contador} - PAR`)
    }
    /*else if((contador % 2) != 0){
        console.log(`${contador} - ÍMPAR`)
    }
    */
    else{
        console.log(`${contador} - ÍMPAR`)
    }
}


//segunda forma de resolver o problema
/*
let numerodealunos = 10;
let contador = 0
while(contador <= numerodealunos)
{
    if(contador == 0){
        //console.log("O número atual é 0")
        console.log(`${contador} - ZERO`) //INTERPOLAÇÃO
        //console.log(contador + " - ZERO")  //CONCATENAÇÃO
    }
    else if((contador % 2) == 0){
        console.log(`${contador} - PAR`)
    }
    //else if((contador % 2) != 0){
        console.log(`${contador} - ÍMPAR`)
    }
    //
    else{
        console.log(`${contador} - ÍMPAR`)
    }
    contador++
}
*/


//terceira forma de resolver o problema
/*
let numerodealunos = 10;
let contador = 0

do
{
    if(contador == 0){
        //console.log("O número atual é 0")
        console.log(`${contador} - ZERO`) //INTERPOLAÇÃO
        //console.log(contador + " - ZERO")  //CONCATENAÇÃO
    }
    else if((contador % 2) == 0){
        console.log(`${contador} - PAR`)
    }
    //else if((contador % 2) != 0){
        console.log(`${contador} - ÍMPAR`)
    }
    //
    else{
        console.log(`${contador} - ÍMPAR`)
    }
    contador++
}while(contador <= numerodealunos)
*/