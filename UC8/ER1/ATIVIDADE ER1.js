let ListaDePeças = ['Filtro de Ar', 'Roda', 'Pneu', 'Disco de Freio', 'Motor', 'Amortecedor']

ListaDePeças.push('Filtro de Ar')
ListaDePeças.push('Roda')
ListaDePeças.push('Pneu')
ListaDePeças.push('Disco de Freio')
ListaDePeças.push('Motor')
ListaDePeças.push('Amortecedor')

if(ListaDePeças.length<10){
    console.log('É possível cadastrar mais peças')
}
else{
    console.log('Não tem mais espaço na caixa')
}

let peso = 150;
if(peso<100){
    console.log("A peça deve pesar no mínimo 100g")
}
else{
    console.log("A peça possui o peso adequado")
}

let NomePeça = "Disco de Freio"

if(NomePeça.length>3){
    console.log("O nome da peça está adequado para o cadastro")
}
else if(NomePeça.length==0){
    console.log("O nome da peça não pode ser vazio")
}
else{
    console.log("O nome da peça deve ter mis de três caracteres. Digite o nome adequado")
}
