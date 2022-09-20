//sistema de radar de velocidade

//variáveis
let velocidade;

//entrada 
velocidade = 105;

//processamento / saída
if(velocidade>110){
    console.log("Você foi multado")
}
else
    {
        if(velocidade>100 && velocidade<110){
            console.log("Você está sendo notificado por andar acima do limite")
        }
        else{
            console.log("Você está dentro do limite de velocidade")
        }
    }
    