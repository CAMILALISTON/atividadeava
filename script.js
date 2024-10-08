let idades = [14, 22, 34, 20, 23, 55, 45, 46];

function pesquisar(){
    let numero = Number(prompt("Qual número você quer pesquisar? "));

    let indice = idades.indexOf(numero);
    if(indice != -1){
        console.log("Achei, esta na posição "+ indice);
    }
    else{
        console.log("Valor não encontrado ");   
    }
}

function cadastrar(){
    let numero = Number(prompt("Digite o número para cadastrar"));
    idades.push(numero);
    console.log(idades);
}

function mostrartodos(){
    let i = 0
    for(let i = 0; i<idades.length; i++){
        document.getElementById('saida').innerHTML += 
            "Aluno: " + idades[i] + "<br>"
    }
}



//  Array(Vetor)  
// O tamanho do vetor sempre será Array-1 (pois o tamanho dele sempre iniciará no 0, )
// para inserir um item dentro do Array = 
//  .push(item) Adiciona um item ao final 
//  .indexOf(item) Retorna a posição do item
//  .splice(posição, quantidade) Remove o item da posição informada
//  .pop() Remove o item da ultima posição